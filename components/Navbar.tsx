  import Image from 'next/image';
  import Link from 'next/link';

  export default function Nav() {
    return (
      <nav className="w-full fixed top-0 left-0 z-[1000] bg-[#333]/40 backdrop-blur-md px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center ml-4 sm:ml-50">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Profile"
                width={45}
                height={45}
                className="w-auto h-auto object-contain"
              />
            </Link>
          </div>

            {/* Right - Image Links */}
            <div className="flex items-center gap-4 mr-4 sm:mr-50">
            {/* Left image link */}
            <Link
                href="https://youtu.be/dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
            >
                <img
                src="/cart.png"
                alt="Left Link"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
            </Link>

            {/* Right image link */}
            <Link
                href="https://www.instagram.com/phamishedcoach"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
            >
                <img
                src="/ig.png"
                alt="Right Link"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
            </Link>
            </div>

        </div>
      </nav>
    );
  }
