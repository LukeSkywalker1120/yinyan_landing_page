import { useRef, useState } from "react";
import type { PointerEvent } from "react";
export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: PointerEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect)
      setPosition(
        Math.max(
          0,
          Math.min(100, ((e.clientX - rect.left) / rect.width) * 100),
        ),
      );
  };
  return (
    <div>
      <div
        ref={ref}
        className="before-after"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e);
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e);
        }}
      >
        <img src="/images/apparel/after-onmodel.webp" alt="产出 · 模特上身" />
        <div
          className="comparison-before"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src="/images/apparel/before-flatlay.webp"
            alt="输入 · 白底平铺"
          />
        </div>
        <span className="compare-label compare-left">输入 · 白底平铺</span>
        <span className="compare-label compare-right">产出 · 模特上身</span>
        <div className="comparison-divider" style={{ left: `${position}%` }}>
          <div
            role="slider"
            tabIndex={0}
            aria-label="输入 · 白底平铺 / 产出 · 模特上身"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onKeyDown={(e) => {
              if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                setPosition((v) =>
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 100
                      : Math.max(
                          0,
                          Math.min(100, v + (e.key === "ArrowLeft" ? -5 : 5)),
                        ),
                );
              }
            }}
            className="comparison-handle"
          >
            ‹ ›
          </div>
        </div>
      </div>
      <span className="compare-hint">拖动查看</span>
    </div>
  );
}
