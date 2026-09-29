import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  if (variant === "link") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-ivory ${className}`}
      >
        {children}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`inline-flex min-h-11 items-center justify-center border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-gold hover:text-gold ${className}`}
      >
        {children}
      </Link>
    );
  }
  if (variant === "ghost") {
    return (
      <Link
        href={href}
        className={`inline-flex min-h-11 items-center justify-center border border-white/10 px-6 py-3 text-sm font-semibold text-stone transition-colors hover:border-gold/60 hover:text-ivory ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center bg-ivory px-6 py-3 text-sm font-semibold text-obsidian transition-colors hover:bg-gold ${className}`}
    >
      {children}
    </Link>
  );
}
