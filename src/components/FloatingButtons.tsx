// Adapted from the public reference markup; editable React components.

export function FloatingButtons({
  onOpen,
}: {
  onOpen: (kind: "service" | "mobile") => void;
}) {
  return (
    <>
      <div
        className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3"
        data-reveal=""
      >
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-card transition hover:scale-105 hover:bg-black hover:text-white"
          aria-label="联系客服"
          title="联系客服"
          tabIndex={0}
          onClick={() => onOpen("service")}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              d="M4 12a8 8 0 1116 0v3a2 2 0 01-2 2h-1.5a1.5 1.5 0 01-1.5-1.5v-2A1.5 1.5 0 0116.5 12H18a6 6 0 10-12 0h1.5A1.5 1.5 0 019 13.5v2A1.5 1.5 0 017.5 17H6a2 2 0 01-2-2v-3z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9 19c.8.6 1.9 1 3 1s2.2-.4 3-1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-card transition hover:scale-105 hover:bg-black hover:text-white"
          aria-label="移动端"
          title="移动端"
          tabIndex={0}
          onClick={() => onOpen("mobile")}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <rect
              x="7"
              y="2.5"
              width={10}
              height={19}
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.8"
            ></rect>
            <path
              d="M10.5 5h3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            ></path>
            <circle cx="12" cy="18.2" r="1" fill="currentColor"></circle>
          </svg>
        </button>
      </div>
    </>
  );
}
