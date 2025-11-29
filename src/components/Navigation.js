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
    <nav className="fixed bottom-0 left-0 right-0 bg-white text-gray-700 shadow-2xl z-50 border-t border-gray-200">
      <div className="max-w-md mx-auto flex justify-around items-center h-20 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 h-full rounded-xl transition-all duration-300 ${
              pathname === item.href
                ? "text-emerald-600 bg-emerald-50 scale-105"
                : "text-gray-500 hover:text-emerald-500 hover:bg-gray-50"
            }`}
          >
            <span
              className={`text-2xl mb-1 transition-transform duration-300 ${
                pathname === item.href ? "scale-110" : ""
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-xs font-medium ${
                pathname === item.href ? "font-bold" : ""
              }`}
            >
              {item.label}
            </span>
            {pathname === item.href && (
              <div className="w-8 h-1 bg-emerald-600 rounded-full mt-1"></div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
