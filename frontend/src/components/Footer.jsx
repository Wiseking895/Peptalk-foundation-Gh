import { FaWhatsapp, FaFacebook, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p className="mb-6 text-center">
          © {new Date().getFullYear()} Peptalk Foundation. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={24} />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={24} />
            <span>Gmail</span>
          </a>

          <a
            href="https://facebook.com/your-page"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
          >
            <FaFacebook size={24} />
            <span>Facebook</span>
          </a>

          <a
            href="https://tiktok.com/@your-profile"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
          >
            <FaTiktok size={24} />
            <span>TikTok</span>
          </a>

          <a
            href="tel:+233XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-500 transition-colors"
          >
            <FaPhone size={24} />
            <span>Contact 1</span>
          </a>

          <a
            href="tel:+233XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-500 transition-colors"
          >
            <FaPhone size={24} />
            <span>Contact 2</span>
          </a>

          <a
            href="tel:+233XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-500 transition-colors"
          >
            <FaPhone size={24} />
            <span>Contact 3</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
