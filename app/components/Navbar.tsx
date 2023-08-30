import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-blue-500 p-2 flex justify-between w-70">
      <Link href="/" className="font-bold text-white text-2xl">
        Blog
      </Link>
    </nav>
  );
}
