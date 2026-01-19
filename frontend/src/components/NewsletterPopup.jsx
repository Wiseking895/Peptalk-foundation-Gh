import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // TODO: connect to backend or email service
    console.log("Subscribed email:", email);

    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative animate-fadeIn">
        
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-2 text-center">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Get updates, inspiration, and opportunities delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-bold mb-2">Thank you 🎉</h3>
            <p className="text-gray-600">
              You’ve successfully subscribed to our newsletter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
