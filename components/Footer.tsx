import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f1f1f] text-white px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-24 relative bottom-0">
      {/* Left Side */}
      <div className="flex items-center gap-3 md:ml-[400px] max-[1000px]:ml-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={45}
            height={45}
            className="w-auto h-auto object-contain"
          />
        </Link>

        <span className="text-[1.1rem] font-semibold">
          Phamished 2026
        </span>
      </div>

      <div className="flex items-center md:mr-[400px] max-[1000px]:mr-0">
        <Link
          href="https://www.credly.com/badges/a7bd63b8-007c-4877-9a50-88f13e574000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/credly.png"
            alt="Registered Dietitian Nutritionist Badge"
            width={70}
            height={70}
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    </footer>
  );
}