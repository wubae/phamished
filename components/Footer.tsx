import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f1f1f] text-white px-5 py-4 flex flex-wrap items-center justify-between mt-24 relative bottom-0">
      {/* Left Side */}
      <div className="flex items-center gap-3 ml-[400px] max-[1000px]:ml-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={45}
            className="object-contain"
          />
        </Link>
        <span className="text-[1.1rem] font-semibold">Phamished 2026</span>
      </div>

    </footer>
  );
}
