import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";

export default function Marketplace() {
  const products = [
    { title: "Product 1", description: "Description here", image: "/images/product1.jpg" },
    { title: "Product 2", description: "Description here", image: "/images/product2.jpg" },
    { title: "Product 3", description: "Description here", image: "/images/product3.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <VideoBackground videoSrc="/videos/marketplace.mp4">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Marketplace</h1>
          <p className="text-lg md:text-2xl">
            Browse products and services provided by Peptalk Foundation.
          </p>
        </div>
      </VideoBackground>

      <section className="py-16 px-6 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-md p-6 rounded shadow hover:shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold text-xl mb-2">{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
