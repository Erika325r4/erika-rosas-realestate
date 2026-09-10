export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-(--container-prose) ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold tracking-wide text-coastal uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold text-navy sm:text-4xl text-balance">{title}</h2>
      {description ? <p className="mt-3 text-base text-charcoal/80">{description}</p> : null}
    </div>
  );
}
