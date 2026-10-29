import { NextResponse } from 'next/server';

// In-memory rate limiting map (IP -> timestamps array)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within the current window
  const activeTimestamps = timestamps.filter((t) => t > windowStart);
  
  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, activeTimestamps);
    return true;
  }

  activeTimestamps.push(now);
  rateLimitMap.set(ip, activeTimestamps);

  // Periodically clean up old IPs
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => t <= windowStart)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

function sanitizeText(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[<>]/g, '') // strip basic HTML tags
    .trim();
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
    },
  });
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many messages sent. Please wait a few minutes before trying again or send an email directly.',
        },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message, _gotcha } = body || {};

    // Honeypot check for bots
    if (_gotcha) {
      return NextResponse.json(
        { success: false, error: 'Spam submission detected.' },
        { status: 400 }
      );
    }

    // Input sanitization
    const sanitizedName = sanitizeText(name);
    const sanitizedEmail = sanitizeText(email);
    const sanitizedSubject = sanitizeText(subject);
    const sanitizedMessage = sanitizeText(message);

    // Validation
    if (!sanitizedName || sanitizedName.length < 2 || sanitizedName.length > 80) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid name (2 to 80 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail) || sanitizedEmail.length > 120) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!sanitizedSubject || sanitizedSubject.length < 3 || sanitizedSubject.length > 120) {
      return NextResponse.json(
        { success: false, error: 'Please enter a brief subject line (3 to 120 characters).' },
        { status: 400 }
      );
    }

    if (!sanitizedMessage || sanitizedMessage.length < 10 || sanitizedMessage.length > 3000) {
      return NextResponse.json(
        { success: false, error: 'Please enter a detailed message (minimum 10 characters).' },
        { status: 400 }
      );
    }

    // Server log of incoming contact inquiry
    console.log('[Contact Form Submission Received]', {
      timestamp: new Date().toISOString(),
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      ip,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your message has been recorded. I will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact Form Error]', err);
    return NextResponse.json(
      { success: false, error: 'An unexpected server error occurred. Please use direct email.' },
      { status: 500 }
    );
  }
}
