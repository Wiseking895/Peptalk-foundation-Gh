import { Link } from "react-router-dom";

export default function FloatingDonateButton() {
  return (
    <Link
      to="/donate"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="animate-pulse rounded-full bg-yellow-400 hover:bg-red-500 transition-all duration-500 shadow-lg">
        <div className="px-6 py-4 text-black font-bold text-sm md:text-base text-center rounded-full animate-[colorShift_3s_infinite]">
          Donate ❤️
        </div>
      </div>
    </Link>
  );
}
