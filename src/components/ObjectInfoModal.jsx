import React from "react";
import { createPortal } from "react-dom";
import { getObjectPdfs } from "../data/oknPdfs";
import PdfViewerOverlay from "./PdfViewerOverlay";

export default function ObjectInfoModal({
  feature,
  onClose,
  pdfSource,
  pdfLabel,
}) {
  const [currentImgIdx, setCurrentImg] = React.useState(0);
  const [openPdf, setOpenPdf] = React.useState(null);
  const [imageMax, setImageMax] = React.useState(320);
  const textRef = React.useRef(null);
  const footerRef = React.useRef(null);

  React.useEffect(() => {
    setCurrentImg(0);
  }, [feature]);

  React.useLayoutEffect(() => {
    if (!feature) return undefined;
    const fit = () => {
      const viewport = window.visualViewport?.height ?? window.innerHeight;
      const textH = textRef.current?.offsetHeight ?? 0;
      const footerH = footerRef.current?.offsetHeight ?? 0;
      const available = viewport - 32 - 64 - 16 - textH - footerH;
      setImageMax(Math.max(96, Math.floor(available)));
    };
    fit();
    window.addEventListener("resize", fit);
    window.visualViewport?.addEventListener("resize", fit);
    return () => {
      window.removeEventListener("resize", fit);
      window.visualViewport?.removeEventListener("resize", fit);
    };
  }, [feature, currentImgIdx]);

  const closeToMap = React.useCallback(() => {
    setOpenPdf(null);
    onClose();
  }, [onClose]);

  if (!feature) return null;
  const { number, description, address, image, kind, historicPurpose } =
    feature.properties || {};
  const pdfs = kind === "valued" ? [] : getObjectPdfs(number, pdfSource);

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.6)",
        zIndex: 10000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          background: "#fff",
          padding: 32,
          width: "min(480px, calc(100% - 2rem))",
          maxWidth: 480,
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          maxHeight: "calc(100dvh - 2rem)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            transition: "background-color 0.2s ease",
          }}
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
        {/* <div className="flex gap-5">
          {id !== undefined && (
            <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>
              id: {id}
            </div>
          )}
          {number !== undefined && (
            <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>
              number: {number}
            </div>
          )}
          {fid !== undefined && (
            <div style={{ color: "#888", fontSize: 14, marginBottom: 8 }}>
              fid: {fid}
            </div>
          )}
        </div> */}

        {/* Заголовок и описание */}
        {/* <h2 style={{ marginTop: 0 }}>{name}</h2> */}
        <div ref={textRef} className="shrink-0">
          {kind === "valued" ? (
            <>
              <p className="min-h-[1.5em]">{description || "\u00a0"}</p>
              {historicPurpose ? (
                <p className="mt-1 text-sm">
                  Историческое назначение здания: {historicPurpose}
                </p>
              ) : null}
            </>
          ) : (
            <p>{description}</p>
          )}
          <p className="text-sm mt-4">{address}</p>
        </div>

        {/* Слайдер изображений */}
        {(() => {
          const photos = Array.isArray(image) ? image.filter(Boolean) : image ? [image] : [];
          if (!photos.length) return null;
          const src = photos[Math.min(currentImgIdx, photos.length - 1)];
          return (
            <div className="relative mt-4 min-h-0 shrink" style={{ maxHeight: imageMax }}>
              {photos.length > 1 && (
                <button
                  onClick={() =>
                    setCurrentImg((idx) => (idx - 1 + photos.length) % photos.length)
                  }
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    background: "rgba(255,255,255,0.7)",
                    border: "none",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                  }}
                  aria-label="Предыдущее фото"
                >
                  &#8592;
                </button>
              )}
              <img
                src={src}
                alt={description || ""}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "auto",
                  height: "auto",
                  maxHeight: imageMax,
                  margin: "0 auto",
                  objectFit: "contain",
                }}
              />
              {photos.length > 1 && (
                <button
                  onClick={() => setCurrentImg((idx) => (idx + 1) % photos.length)}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    background: "rgba(255,255,255,0.7)",
                    border: "none",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                  }}
                  aria-label="Следующее фото"
                >
                  &#8594;
                </button>
              )}
            </div>
          );
        })()}

        <div ref={footerRef} className="shrink-0">
        {Array.isArray(image) && image.filter(Boolean).length > 1 && (
          <div style={{ textAlign: "center", marginTop: 8, color: "#888" }}>
            {currentImgIdx + 1} / {image.filter(Boolean).length}
          </div>
        )}

        {pdfs.length > 0 && (
          <div className="flex flex-col items-start gap-3 mt-4">
            {pdfs.map((href) => {
              const fileName = href.split("/").pop();
              return (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-orange font-bold underline"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenPdf({
                      href,
                      downloadName: `${pdfLabel} ${fileName}`,
                    });
                  }}
                >
                  <img src="/icons/pdf.svg" alt="" className="w-5 h-5" />
                  {pdfLabel}
                </a>
              );
            })}
          </div>
        )}
        </div>
      </div>
      {openPdf && (
        <PdfViewerOverlay
          href={openPdf.href}
          downloadName={openPdf.downloadName}
          onClose={closeToMap}
        />
      )}
    </div>,
    document.body
  );
}
