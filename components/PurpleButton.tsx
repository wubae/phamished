type GradientButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function PurpleButton({ href, children }: GradientButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-8 py-3 text-white font-bold transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      {children}
    </a>
  );
}