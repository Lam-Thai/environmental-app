import Link from "next/link";
import Image from "next/image";

export default function Header({ title }) {
  return (
    <header className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 flex items-center justify-between sticky top-0 z-40 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="flex items-center gap-3">
        <button className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Logo in the center - clickable to go home */}
      <Link
        href="/home"
        className="flex items-center justify-center transform hover:scale-105 transition-transform duration-200"
      >
        <Image
          src="/Group 3.svg"
          alt="RELEAF Logo"
          width={90}
          height={30}
          className="cursor-pointer drop-shadow-md"
          priority
        />
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/cart"
          className="hover:bg-white/20 p-2 rounded-full transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
        <Link
          href="/settings"
          className="hover:bg-white/20 p-2 rounded-full transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
