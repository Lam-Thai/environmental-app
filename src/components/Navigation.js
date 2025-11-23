"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/home", icon: "🏠", label: "Home" },
    { href: "/activities", icon: "🌿", label: "Activities" },
    { href: "/report", icon: "📢", label: "Report" },
    { href: "/donation", icon: "💚", label: "Donate" },
    { href: "/products", icon: "🛒", label: "Shop" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-green-500 text-white shadow-lg z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 h-full ${
              pathname === item.href ? "bg-green-600" : ""
            }`}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
