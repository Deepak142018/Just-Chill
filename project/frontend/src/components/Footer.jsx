

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        {/* Logo on Top */}
        <img
          src="/JustChill1.svg"
          alt="Just-Chill Logo"
          className="h-12"
        />

        {/* Links in Middle */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </li>
        </ul>

        {/* Footer Note at Bottom */}
        <p className="text-xs text-gray-400 text-center">
          © 2025 JustChill, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
