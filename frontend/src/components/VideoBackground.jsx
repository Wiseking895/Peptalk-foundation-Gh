export default function VideoBackground({ children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/vid3.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for blend */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content layer */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
