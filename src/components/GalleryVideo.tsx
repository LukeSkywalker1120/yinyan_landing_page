import { useEffect, useRef, useState } from "react";

let activeVideo: HTMLVideoElement | null = null;

export function GalleryVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = ref.current;
    return () => {
      video?.pause();
      if (activeVideo === video) activeVideo = null;
    };
  }, []);

  async function togglePlayback() {
    const video = ref.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    if (activeVideo && activeVideo !== video) activeVideo.pause();
    activeVideo = video;
    if (!video.getAttribute("src")) {
      video.src = src;
      video.load();
    }
    video.muted = false;
    video.volume = 1;
    setFailed(false);
    try {
      await video.play();
    } catch {
      setFailed(true);
    }
  }

  return (
    <figure className="group overflow-hidden rounded-xl bg-black shadow-[0_10px_28px_-22px_rgba(17,17,17,.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(17,17,17,.4)]">
      <div className="relative overflow-hidden bg-black">
        <video
          ref={ref}
          poster={poster}
          loop
          playsInline
          preload="none"
          className="block h-auto w-full bg-black"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={title}
          aria-pressed={playing}
          className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full bg-black/45 backdrop-blur-sm transition duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
          >
            {playing ? (
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="7" y="5" width="3.6" height="14" rx="1" />
                <rect x="13.4" y="5" width="3.6" height="14" rx="1" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="ml-0.5 h-6 w-6 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            )}
          </span>
          {failed && (
            <span className="video-error" role="status">
              播放失败，点击重试
            </span>
          )}
        </button>
      </div>
    </figure>
  );
}
