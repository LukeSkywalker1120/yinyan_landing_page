import { SectionHeading } from "./ui";

const platforms = [
  {
    id: "windows",
    name: "Windows",
    architecture: "x64",
    description: "Windows 10 及以上，64 位",
    icon: "M3 5.6l7.2-1v7.1H3V5.6zm0 12.8l7.2 1v-7H3v6zm8.4 1.2L21 21V12.7h-9.6v6.9zM11.4 3v7.7H21V2l-9.6 1z",
  },
  {
    id: "macos",
    name: "macOS",
    architecture: "Universal",
    description: "Intel 与 Apple 芯片通用",
    icon: "M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.6-.4 6.5 1.1 8.7.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.2-.9-2.2-3.5zM14.3 5.8c.6-.7 1-1.7.9-2.8-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.7-.9 2.7 1 .1 2-.5 2.6-1.2z",
  },
];

function PlatformIcon({
  path,
  className,
}: {
  path: string;
  className: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function DownloadPageSections() {
  const userAgent = navigator.userAgent.toLowerCase();
  const detectedOS = /windows|win32|win64/.test(userAgent)
    ? "windows"
    : /mac os|macintosh/.test(userAgent)
      ? "macos"
      : null;
  const recommended = platforms.find((platform) => platform.id === detectedOS);
  return (
    <>
      <section className="border-b border-black/6 bg-white pb-14 pt-12 md:pb-20 md:pt-16">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <div data-reveal="">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
              桌面客户端
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2rem,3vw+0.6rem,3rem)] font-bold leading-[1.14] tracking-[-0.02em]">
              把批量出图搬到本地
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              客户端适合长时间、大批量的素材处理：可后台运行、断点续跑，生成结果直接落到本地目录。
            </p>
          </div>
          {recommended && (
            <div
              className="mt-10 rounded-2xl bg-ink p-6 text-white shadow-float md:p-8"
              data-reveal=""
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                推荐给你的版本
              </p>
              <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <PlatformIcon
                    path={recommended.icon}
                    className="h-9 w-9 shrink-0 text-white/85"
                  />
                  <div>
                    <p className="text-lg font-semibold">{recommended.name}</p>
                    <p className="mt-1 text-sm text-white/60">
                      {recommended.architecture} · 客户端准备中
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  disabled
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  待配置
                </button>
              </div>
              <p className="mt-5 border-t border-white/12 pt-4 text-xs leading-relaxed text-white/50">
                已根据你的系统自动匹配，如不正确可在下方选择其他平台。
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="bg-page pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-black/45">
            {recommended ? "其他平台" : "推荐给你的版本"}
          </h2>
          <div className="mt-6 space-y-8">
            {platforms
              .filter((platform) => platform !== recommended)
              .map((platform) => (
                <div key={platform.id}>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
                    <PlatformIcon
                      path={platform.icon}
                      className="h-4 w-4 text-black/55"
                    />
                    {platform.name}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div
                      className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/6"
                      data-reveal=""
                    >
                      <div className="flex min-w-0 items-center gap-3.5">
                        <PlatformIcon
                          path={platform.icon}
                          className="h-7 w-7 shrink-0 text-black/70"
                        />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-ink">
                            {platform.name}
                          </p>
                          <p className="mt-1 truncate text-xs text-muted">
                            {platform.description}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        disabled
                        className="inline-flex shrink-0 items-center justify-center rounded-full border border-black/12 px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25"
                      >
                        待配置
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <ul className="mt-9 space-y-2.5">
            {[
              "桌面客户端准备中，安装包发布后将在本页提供下载。",
              "当前可通过网页版使用影焰AI。",
            ].map((note) => (
              <li
                key={note}
                className="flex gap-2.5 text-sm leading-relaxed text-muted"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black/30"
                  aria-hidden="true"
                />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-white pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto w-full px-6 md:px-8 max-w-[1216px]">
          <SectionHeading
            title="不想装客户端？"
            subtitle="全部核心能力在浏览器里同样可用，打开即用，无需安装。"
          />
          <div className="mt-8 flex justify-center">
            <a
              href="https://yy.7w2.cn/login"
              className="inline-flex min-w-[12.5rem] items-center justify-center rounded-full bg-ink px-8 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2"
            >
              直接用网页版
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
