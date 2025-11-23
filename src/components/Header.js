import Link from "next/link";
import Image from "next/image";

export default function Header({ title }) {
  return (
    <header className="bg-green-500 text-white p-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <button className="text-white">
          <span className="text-xl">🔍</span>
        </button>
      </div>

      {/* Logo in the center - clickable to go home */}
      <Link href="/home" className="flex items-center justify-center">
        <Image
          src="/Group 3.svg"
          alt="RELEAF Logo"
          width={90}
          height={30}
          className="cursor-pointer"
          priority
        />
      </Link>

      <div className="flex items-center gap-3">
        <Link href="/cart">
          <span className="text-xl">🛒</span>
        </Link>
        <Link href="/settings">
          <button className="text-white">
            <span className="text-xl">☰</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
