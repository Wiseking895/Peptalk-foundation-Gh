import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 mb-4">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
