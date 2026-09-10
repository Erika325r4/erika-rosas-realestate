import { socialLinks } from "@/content/site";

export function SocialLinks({ className = "" }: { className?: string }) {
  if (socialLinks.length === 0) return null;

  return (
    <ul className={`flex gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target inline-flex items-center justify-center rounded-full text-sm text-white/80 hover:text-white"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
