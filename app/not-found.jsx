import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono tracking-widest text-accent uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        <span>ERROR 404 &bull; VOID REACHED</span>
      </div>

      <h1 className="text-6xl sm:text-8xl font-heading font-extrabold text-text-primary tracking-tightest mb-4">
        404
      </h1>

      <p className="text-lg sm:text-xl text-text-secondary max-w-md font-light mb-8">
        The coordinates you navigated to do not exist within this digital experience.
      </p>

      <Link
        href="/"
        className="px-7 py-3.5 rounded-full bg-accent text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#bbf63c] transition-all shadow-[0_0_20px_rgba(199,255,74,0.3)]"
      >
        Return to Experience
      </Link>
    </div>
  );
}
