export default function VideoBackground({ videoSrc, children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black/50 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
