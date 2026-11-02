export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-20 ${
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-4xl"
      } ${className}`}
    >
      {tag && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono tracking-widest text-text-secondary uppercase ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>{tag}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tightest leading-[1.08] text-text-primary uppercase">
        {title}{" "}
        {highlight && (
          <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-8">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-5 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
