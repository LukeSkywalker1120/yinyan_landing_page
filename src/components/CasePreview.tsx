import { useState } from "react";

export function CasePreview({
  item,
  onClose,
}: {
  item: { title: string; urls: string[]; thumbnail: string };
  onClose: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className="absolute right-2.5 top-2.5 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-lg leading-none text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        aria-label="关闭弹窗"
      >
        ×
      </button>
      {!loaded && (
        <div className="case-loading" role="status" aria-label="正在加载图片">
          ifrogai
        </div>
      )}
      <div
        className="case-scroll"
        tabIndex={0}
        aria-label="案例图片，可上下滚动"
      >
        {item.urls.map((url, index) => (
          <img
            key={url}
            src={`${url.split("?")[0]}?imageMogr2/thumbnail/960x/format/webp/quality/82`}
            alt={`${item.title} ${index + 1}`}
            className="block w-full"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={(event) => {
              setLoaded(true);
              const image = event.currentTarget;
              if (image.src !== new URL(item.thumbnail, location.href).href)
                image.src = item.thumbnail;
            }}
          />
        ))}
      </div>
    </>
  );
}
