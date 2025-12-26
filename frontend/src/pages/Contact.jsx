import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <VideoBackground videoSrc="/videos/contact.mp4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-2xl">
            Reach out for partnerships, donations, or general inquiries.
          </p>
        </div>
      </VideoBackground>

      <section className="py-16 px-6 max-w-3xl mx-auto">
        <form className="flex flex-col gap-4 bg-white/20 p-8 rounded shadow-md">
          <input type="text" placeholder="Name" className="p-3 rounded focus:outline-none"/>
          <input type="email" placeholder="Email" className="p-3 rounded focus:outline-none"/>
          <textarea placeholder="Message" className="p-3 rounded focus:outline-none" rows={6}></textarea>
          <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>
      
    </div>
  );
}
