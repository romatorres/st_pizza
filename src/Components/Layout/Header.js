import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          ST PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex gap-4 items-center font-semibold">
        <Link
          className="border border-gray-500 text-gray-500 rounded-full px-14 py-2"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          className="border border-primary bg-primary text-white rounded-full px-8 py-2"
          href={"/register"}
        >
          Registre-se
        </Link>
      </nav>
    </header>
  );
}
