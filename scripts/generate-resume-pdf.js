const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'resume');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Maneet_Resume.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 42, right: 42 },
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const PRIMARY_COLOR = '#111827';
const ACCENT_COLOR = '#4F46E5';
const SECONDARY_COLOR = '#4B5563';
const BORDER_COLOR = '#E5E7EB';

// Header
doc.font('Helvetica-Bold').fontSize(22).fillColor(PRIMARY_COLOR).text('MANEET', { characterSpacing: 1 });
doc.font('Helvetica').fontSize(11).fillColor(ACCENT_COLOR).text('Aspiring Web Developer  |  BCA Student (Currently Pursuing)');
doc.moveDown(0.3);

// Contact Info
doc.font('Helvetica').fontSize(9).fillColor(SECONDARY_COLOR).text('Email: mohanmanish740@gmail.com   |   GitHub: github.com/maneetunictechnology/maneet-jwell11');
doc.moveDown(0.5);

// Horizontal Line
doc.strokeColor(BORDER_COLOR).lineWidth(1).moveTo(42, doc.y).lineTo(553, doc.y).stroke();
doc.moveDown(0.6);

// Section: Professional Summary
function renderSectionHeader(title) {
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(10).fillColor(ACCENT_COLOR).text(title.toUpperCase(), { characterSpacing: 1 });
  doc.moveDown(0.2);
  doc.strokeColor(BORDER_COLOR).lineWidth(0.5).moveTo(42, doc.y).lineTo(553, doc.y).stroke();
  doc.moveDown(0.4);
}

renderSectionHeader('Professional Summary');
doc.font('Helvetica').fontSize(9).fillColor(PRIMARY_COLOR).lineGap(2).text(
  "Aspiring Web Developer and Bachelor of Computer Applications (BCA) student with hands-on experience building full-stack web applications, e-commerce workflows, and data-driven solutions. Practical expertise in modern JavaScript, React, Next.js, Node.js, and MongoDB, backed by functional project architectures and continuous problem-solving."
);

// Section: Technical Skills
renderSectionHeader('Technical Skills (Verified)');
const skills = [
  { group: 'Frontend', items: 'HTML5, CSS3, JavaScript (ES6+), React, Next.js (App Router), Tailwind CSS' },
  { group: 'Backend', items: 'Node.js, RESTful API Design, Server Route Handlers, Session Cookies' },
  { group: 'Database', items: 'MongoDB (Document modeling, CRUD operations, atomic stock management)' },
  { group: 'Tools & Packaging', items: 'Git, GitHub, Vercel Deployment, Capacitor (Mobile Packaging)' },
];

skills.forEach(s => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(PRIMARY_COLOR).text(`${s.group}: `, { continued: true });
  doc.font('Helvetica').fillColor(SECONDARY_COLOR).text(s.items);
  doc.moveDown(0.15);
});

// Section: Education
renderSectionHeader('Education');
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY_COLOR).text('Bachelor of Computer Applications (BCA)', { continued: true });
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(ACCENT_COLOR).text('   [Currently Pursuing]');
doc.font('Helvetica').fontSize(8.5).fillColor(SECONDARY_COLOR).text('Status: In Progress   |   Coursework: Data Structures, Algorithms, DBMS, Web Development');

// Section: Selected Practical Projects
renderSectionHeader('Selected Practical Projects');

// Project 1: MikuMantra
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY_COLOR).text('MikuMantra E-Commerce Website', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(ACCENT_COLOR).text('   (Primary Project  |  Live: https://miku-mantra.vercel.app/)');
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(SECONDARY_COLOR).text('Next.js, React, MongoDB, Node.js, Tailwind CSS, Razorpay (Mock), Capacitor');
doc.moveDown(0.2);

const mikuPoints = [
  'Engineered an end-to-end jewellery & lifestyle e-commerce platform using Next.js App Router and MongoDB.',
  'Implemented dynamic product catalog with category filtering (Diamond, Gemstone, Enamel), image zoom, and related items.',
  'Built client shopping cart & wishlist state persistence with secure session cookie authentication and profile management.',
  'Constructed coupon validation engine (AURELIA10, WELCOME2000), Cash on Delivery (COD) flow, and Razorpay Mock verification.',
  'Designed automated order number generation (format "AUR-XXXXXXXX-XXX") with transactional inventory decrementing.',
  'Developed administrative dashboard tracking store metrics (revenue, orders, product count) and full inventory CRUD operations.',
  'Configured Capacitor integration, compiling the web frontend into native Android APK packages (app-debug.apk and Mikumantra.apk).'
];

mikuPoints.forEach(pt => {
  doc.font('Helvetica').fontSize(8.5).fillColor(PRIMARY_COLOR).text(`  *  ${pt}`, { lineGap: 1.5 });
});
doc.moveDown(0.4);

// Project 2: AI-Powered CRM
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY_COLOR).text('AI-Powered CRM', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(SECONDARY_COLOR).text('   [Prototype & Architectural System]');
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(SECONDARY_COLOR).text('Next.js, React, Node.js, MongoDB, Tailwind CSS');
doc.moveDown(0.2);

const crmPoints = [
  'Designed software architecture and data models for lead ingestion, website research logging, and qualification scoring.',
  'Configured pipeline progression workflow (New Lead -> Researched -> Qualified -> Proposal) with chronological activity timelines.'
];

crmPoints.forEach(pt => {
  doc.font('Helvetica').fontSize(8.5).fillColor(PRIMARY_COLOR).text(`  *  ${pt}`, { lineGap: 1.5 });
});
doc.moveDown(0.4);

// Project 3: Product Distribution Platform
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(PRIMARY_COLOR).text('Product Distribution Platform', { continued: true });
doc.font('Helvetica').fontSize(8.5).fillColor(SECONDARY_COLOR).text('   [Exploration & Data Modeling]');
doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(SECONDARY_COLOR).text('React, Node.js, MongoDB, JavaScript, CSS');
doc.moveDown(0.2);

const distPoints = [
  'Explored centralized product information management (PIM) schema unifying product attributes across multi-channel marketplaces.',
  'Created attribute transformation mapping workflows and syndication feed formatters for structured CSV and JSON exports.'
];

distPoints.forEach(pt => {
  doc.font('Helvetica').fontSize(8.5).fillColor(PRIMARY_COLOR).text(`  *  ${pt}`, { lineGap: 1.5 });
});

// Footer
doc.moveDown(0.6);
doc.strokeColor(BORDER_COLOR).lineWidth(0.5).moveTo(42, doc.y).lineTo(553, doc.y).stroke();
doc.moveDown(0.3);
doc.font('Helvetica').fontSize(8).fillColor(SECONDARY_COLOR).text(
  'Availability: Open for Web Development Roles & Freelance Inquiries   |   Contact: mohanmanish740@gmail.com',
  { align: 'center' }
);

doc.end();

writeStream.on('finish', () => {
  console.log('PDF Resume generated successfully at: ' + outputPath);
});
