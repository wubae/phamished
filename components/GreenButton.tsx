import Link from "next/link";

type GreenButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function GreenButton({ href, children }: GreenButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#16a34a] via-[#22c55e] to-[#86efac] px-6 py-3 text-white font-bold transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}