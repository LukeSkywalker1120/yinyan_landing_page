import { useEffect, useRef, useState } from "react";
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (media.matches || document.hidden) video.pause();
      else video.play().catch(() => setReady(false));
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) update();
      else video.pause();
    });
    observer.observe(video);
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <video
      ref={ref}
      src="/hero-video.mp4"
      poster="/hero-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden="true"
      className={`hero-background-video hero-media-drift ${ready ? "is-ready" : ""}`}
      onLoadedData={() => setReady(true)}
      onError={() => setReady(false)}
    />
  );
}
