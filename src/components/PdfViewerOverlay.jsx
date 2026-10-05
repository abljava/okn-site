import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function PdfViewerOverlay({ href, downloadName, onClose }) {
  const overlayRef = useRef(null);
  const viewerSrc = `${href}#view=FitH`;

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const syncViewport = () => {
      const el = overlayRef.current;
      if (!el) return;
      const viewport = window.visualViewport;
      el.style.top = `${viewport?.offsetTop ?? 0}px`;
      el.style.left = `${viewport?.offsetLeft ?? 0}px`;
      el.style.width = `${viewport?.width ?? window.innerWidth}px`;
      el.style.height = `${viewport?.height ?? window.innerHeight}px`;
    };

    syncViewport();
    window.visualViewport?.addEventListener("resize", syncViewport);
    window.visualViewport?.addEventListener("scroll", syncViewport);
    window.addEventListener("resize", syncViewport);

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.visualViewport?.removeEventListener("resize", syncViewport);
      window.visualViewport?.removeEventListener("scroll", syncViewport);
      window.removeEventListener("resize", syncViewport);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed z-[10050] flex flex-col overflow-hidden bg-black overscroll-none"
      style={{ zIndex: 10050, top: 0, left: 0, width: "100%", height: "100dvh" }}
      onClick={onClose}
      onWheel={(event) => event.preventDefault()}
    >
      <div
        className="flex shrink-0 items-center justify-between gap-2 bg-white px-3 py-2 md:gap-3 md:px-4 md:py-3"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-bold text-orange underline md:text-base"
        >
          Вернуться к карте
        </button>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href={href}
            download={downloadName}
            className="flex items-center gap-2 text-sm font-bold text-orange underline md:text-base"
          >
            <img src="/icons/pdf.svg" alt="" className="h-5 w-5" />
            Скачать файл
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-8 w-8 items-center justify-center rounded"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden p-2 md:p-10">
        <iframe
          src={viewerSrc}
          title={downloadName || "PDF"}
          className="block h-full w-full border-0 bg-white"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>,
    document.body
  );
}
