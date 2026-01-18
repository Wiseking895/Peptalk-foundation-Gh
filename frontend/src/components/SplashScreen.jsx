import { useEffect, useState } from "react";

const text = "PEPTALK GHANA";

export default function SplashScreen({ onFinish }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const intervalTime = 1000 / text.length; // total 10 seconds

    const interval = setInterval(() => {
      setVisibleCount((count) => count + 1);
    }, intervalTime);

    const timer = setTimeout(() => {
      clearInterval(interval);
      onFinish();
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <h1
        className="text-white text-5xl md:text-7xl font-bold font-sans"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        {text.slice(0, visibleCount)}
      </h1>
    </div>
  );
}
