import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./AccordionGallery.css";

type VideoItem = { src: string; title: string };

// Video adaptation of the supplied React Bits AccordionGallery.
// Reuses the project's animation engine and preserves native video controls.
export default function AccordionGallery({ items }: { items: VideoItem[] }) {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    videos.current.forEach((video, index) => {
      if (index !== active) video?.pause();
    });
  }, [active]);

  return (
    <div className="occurrence-accordion" role="group" aria-label="Vídeos de ocorrências">
      {items.map((item, index) => {
        const expanded = active === index;
        return (
          <motion.article
            key={item.src}
            className={`occurrence-panel${expanded ? " occurrence-panel--active" : ""}`}
            initial={false}
            animate={{ flexGrow: expanded ? Math.max(1, (0.52 * (items.length - 1)) / 0.48) : 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            onPointerEnter={(event) => {
              // Keep the player steady while someone is watching a video.
              if (
                event.pointerType === "mouse" &&
                !videos.current.some((video) => video && !video.paused)
              ) {
                setActive(index);
              }
            }}
          >
            <video
              id={`occurrence-player-${index}`}
              ref={(element) => {
                videos.current[index] = element;
              }}
              className="occurrence-panel__video"
              controls={expanded}
              tabIndex={expanded ? 0 : -1}
              preload="metadata"
              playsInline
              aria-label={item.title}
            >
              <source src={item.src} type="video/mp4" />
              Seu navegador não oferece suporte à reprodução deste vídeo.
            </video>
            <button
              ref={(element) => {
                buttons.current[index] = element;
              }}
              type="button"
              className="occurrence-panel__select"
              aria-expanded={expanded}
              aria-controls={`occurrence-player-${index}`}
              aria-label={`Exibir ${item.title}`}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onKeyDown={(event) => {
                const next =
                  event.key === "ArrowRight" || event.key === "ArrowDown"
                    ? (index + 1) % items.length
                    : event.key === "ArrowLeft" || event.key === "ArrowUp"
                      ? (index - 1 + items.length) % items.length
                      : event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? items.length - 1
                          : null;
                if (next !== null) {
                  event.preventDefault();
                  buttons.current[next]?.focus();
                }
              }}
            >
              <span className="occurrence-panel__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="occurrence-panel__title">{item.title}</span>
            </button>
          </motion.article>
        );
      })}
    </div>
  );
}
