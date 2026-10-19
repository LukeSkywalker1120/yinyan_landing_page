import { useEffect, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { createPortal } from "react-dom";

export function handleTabKey(
  event: KeyboardEvent<HTMLElement>,
  index: number,
  count: number,
  select: (n: number) => void,
) {
  let next = index;
  if (event.key === "ArrowRight") next = (index + 1) % count;
  else if (event.key === "ArrowLeft") next = (index + count - 1) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else return;
  event.preventDefault();
  const ids = Array.from(
    event.currentTarget.parentElement?.querySelectorAll<HTMLElement>(
      '[role="tab"]',
    ) ?? [],
  ).map((el) => el.id);
  select(next);
  requestAnimationFrame(() => document.getElementById(ids[next])?.focus());
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center" data-reveal="">
      <span
        aria-hidden="true"
        className="section-kicker mb-5 inline-block h-px w-10 origin-center bg-black/25"
      />
      <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-[min(92vw,52rem)] text-sm leading-relaxed text-muted md:mt-4 md:text-base md:leading-relaxed lg:max-w-[min(92vw,60rem)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Dialog({
  children,
  label,
  onClose,
  kind = "normal",
}: {
  children: ReactNode;
  label: string;
  onClose: () => void;
  kind?: "normal" | "gallery" | "partner" | "drawer";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const root = document.getElementById("root");
    if (root) root.inert = true;
    const focusable = () =>
      Array.from(
        ref.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]),a[href],input,textarea,[tabindex="0"]',
        ) ?? [],
      ).filter((el) => el.getClientRects().length > 0);
    (focusable()[0] ?? ref.current)?.focus();
    const key = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeRef.current();
      if (event.key === "Tab") {
        const items = focusable(),
          first = items[0],
          last = items[items.length - 1];
        if (!first) {
          event.preventDefault();
          return;
        }
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = old;
      if (root) root.inert = false;
      previous?.focus();
    };
  }, []);
  return createPortal(
    <div className={`dialog-backdrop dialog-${kind}`} onClick={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        className="dialog-content"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function usePageReveals() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.animate(
            [
              {
                opacity: 0,
                filter: "blur(8px)",
                transform: "translateY(24px)",
              },
              { opacity: 1, filter: "blur(0px)", transform: "none" },
            ],
            { duration: 650, easing: "cubic-bezier(.16,1,.3,1)", fill: "none" },
          );
          observer.unobserve(entry.target);
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
