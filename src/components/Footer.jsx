export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-[5vw] py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-mono-custom text-[#6b6b85] text-xs tracking-widest">
          © {year} Lishi — Backend Developer
        </span>
        <span className="font-mono-custom text-[#6b6b85] text-xs tracking-widest">
          Built with React · Deployed on GitHub Pages
        </span>
      </div>
    </footer>
  );
}