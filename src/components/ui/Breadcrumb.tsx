import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-white/50 hover:text-accent transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 text-white/30" />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="text-white/50 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white/80">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
