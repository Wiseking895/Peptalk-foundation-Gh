import { Link } from "react-router-dom";

export default function HamburgerMenu({ setIsOpen }) {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Education", path: "/education" },
    { name: "Health & Wealth", path: "/health-wealth" },
    { name: "Career Advice", path: "/career-advice" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Inspirations", path: "/inspirations" },
  ];

  return (
    <div className="md:hidden bg-black/90 text-white absolute w-full top-16 left-0 flex flex-col items-center py-6 space-y-4 font-semibold">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className="hover:text-yellow-400 transition"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
