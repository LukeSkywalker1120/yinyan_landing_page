import { useState } from "react";
import galleryData from "../data/gallery.json";
import { Dialog, SectionHeading, handleTabKey } from "./ui";
import { GalleryVideo } from "./GalleryVideo";
import { CasePreview } from "./CasePreview";

type Case = {
  id: string;
  title: string;
  urls: string[];
  poster: string;
  thumbnail: string;
};
type Group = keyof typeof galleryData;
const groupLabels: Record<Group, string> = {
  main: "主图",
  detail: "详情图",
  portrait: "人像摄影",
  tvc: "产品TVC",
  talking: "口播视频",
  apparel: "服装视频",
};
export function Gallery() {
  const [mode, setMode] = useState<"image" | "video">("image");
  const [imageGroup, setImageGroup] = useState<Group>("main");
  const [videoGroup, setVideoGroup] = useState<Group>("tvc");
  const [selected, setSelected] = useState<Case | null>(null);
  const group = mode === "image" ? imageGroup : videoGroup;
  const groups: Group[] =
    mode === "image"
      ? ["main", "detail", "portrait"]
      : ["tvc", "talking", "apparel"];
  const cases = galleryData[group] as Case[];
  return (
    <section id="showcase" className="bg-white pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto w-full px-6 md:px-8 max-w-[1344px]">
        <SectionHeading title="AI 生成案例" subtitle="精选部分平台生成效果。" />
        <div
          className="mx-auto mt-8 flex w-fit rounded-full border border-black/8 bg-black/[0.04] p-1"
          role="tablist"
          aria-label="AI 生成案例"
        >
          {(["image", "video"] as const).map((value, i) => (
            <button
              id={`showcase-tab-${value}`}
              type="button"
              role="tab"
              aria-selected={mode === value}
              aria-controls="showcase-panel"
              tabIndex={mode === value ? 0 : -1}
              key={value}
              onClick={() => setMode(value)}
              onKeyDown={(e) =>
                handleTabKey(e, i, 2, (n) => setMode(n ? "video" : "image"))
              }
              className={
                "relative isolate min-w-24 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2 " +
                (mode === value ? "text-white" : "text-black/48 hover:text-ink")
              }
            >
              {mode === value && (
                <span className="absolute inset-0 -z-10 rounded-full bg-ink shadow-card" />
              )}
              <span className="relative">
                {value === "image" ? "图片" : "视频"}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <div
            className="flex flex-wrap justify-center gap-1"
            role="tablist"
            aria-label={mode === "image" ? "图片分类" : "视频分类"}
          >
            {groups.map((key, i) => (
              <button
                key={key}
                id={`showcase-subtab-${key}`}
                type="button"
                role="tab"
                aria-selected={group === key}
                aria-controls="showcase-panel"
                tabIndex={group === key ? 0 : -1}
                onClick={() =>
                  mode === "image" ? setImageGroup(key) : setVideoGroup(key)
                }
                onKeyDown={(e) =>
                  handleTabKey(e, i, groups.length, (n) =>
                    mode === "image"
                      ? setImageGroup(groups[n])
                      : setVideoGroup(groups[n]),
                  )
                }
                className={
                  "relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 " +
                  (group === key
                    ? "text-ink"
                    : "text-black/38 hover:text-black/62")
                }
              >
                {groupLabels[key]}
                {group === key && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-ink" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div
          id="showcase-panel"
          role="tabpanel"
          aria-labelledby={`showcase-subtab-${group}`}
          key={group}
          className="gallery-panel"
        >
          <div
            className={
              mode === "image"
                ? "mt-8 columns-2 gap-3 sm:gap-4 md:columns-3 xl:columns-4"
                : "mt-8 columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3"
            }
          >
            {cases.map((item, i) => (
              <div key={item.id} className="mb-3 break-inside-avoid sm:mb-4">
                {mode === "video" ? (
                  <GalleryVideo
                    src={item.urls[0]}
                    poster={item.thumbnail}
                    title={item.title}
                  />
                ) : (
                  <button
                    type="button"
                    aria-label={`${item.title}，查看案例 ${i + 1}`}
                    onClick={() => {
                      setSelected(item);
                    }}
                    className="group relative block w-full overflow-hidden rounded-xl bg-[#f4f2ef] text-left shadow-[0_10px_28px_-22px_rgba(17,17,17,.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(17,17,17,.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading={i < 4 ? "eager" : "lazy"}
                      decoding="async"
                      className="block h-auto w-full transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    />
                    {item.urls.length > 1 && (
                      <span className="pointer-events-none absolute right-2 top-2 rounded-md bg-black/60 px-1.5 py-0.5 text-[0.6875rem] font-semibold leading-none text-white tabular-nums backdrop-blur-[2px]">
                        {item.urls.length}
                      </span>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selected && (
        <Dialog
          kind="gallery"
          label={selected.title}
          onClose={() => setSelected(null)}
        >
          <CasePreview
            key={selected.id}
            item={selected}
            onClose={() => setSelected(null)}
          />
        </Dialog>
      )}
    </section>
  );
}
