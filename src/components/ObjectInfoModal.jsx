import React from "react";
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

  const closeToMap = React.useCallback(() => {
    setOpenPdf(null);
    onClose();
  }, [onClose]);

  if (!feature) return null;
  const { id, number, fid, name, description, address, image } =
    feature.properties || {};
  const pdfs = getObjectPdfs(number, pdfSource);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        zIndex: 10000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          // borderRadius: 12,
          padding: 32,
          minWidth: 320,
          maxWidth: 480,
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          maxHeight: "70vh",
          overflowY: "auto",
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
        <p>{description}</p>
        <p className="text-sm mt-4">{address}</p>
        
        {/* Слайдер изображений */}
        {Array.isArray(image) && image.length > 1 ? (
          <div
            style={{ position: "relative", maxWidth: "100%", marginTop: 16 }}
          >
            <button
              onClick={() =>
                setCurrentImg((idx) => (idx - 1 + image.length) % image.length)
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
            <img
              src={image[currentImgIdx]}
              alt={description}
              style={{
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
              }}
            />
            <button
              onClick={() => setCurrentImg((idx) => (idx + 1) % image.length)}
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
            <div style={{ textAlign: "center", marginTop: 8, color: "#888" }}>
              {currentImgIdx + 1} / {image.length}
            </div>
          </div>
        ) : (
          image && (
            <img
              src={Array.isArray(image) ? image[0] : image}
              alt={description}
              style={{ maxWidth: "100%", marginTop: 16 }}
            />
          )
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
      {openPdf && (
        <PdfViewerOverlay
          href={openPdf.href}
          downloadName={openPdf.downloadName}
          onClose={closeToMap}
        />
      )}
    </div>
  );
}
