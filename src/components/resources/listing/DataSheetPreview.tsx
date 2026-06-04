"use client";

import { useEffect, useState } from "react";
import { renderPdfThumbnailDataUrl } from "@/lib/pdf-thumbnail";

type DataSheetPreviewProps = {
  title: string;
  fileUrl?: string;
  previewImageUrl?: string;
  productImageUrl?: string;
  productImageAlt?: string;
};

function PdfPlaceholder() {
  return (
    <div className="data-sheet-card__preview-placeholder" aria-hidden="true">
      <svg
        className="data-sheet-card__preview-icon"
        viewBox="0 0 48 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="2" width="40" height="56" rx="2" fill="#fff" stroke="#ddd" />
        <path d="M14 14h20M14 22h20M14 30h14" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="38" width="14" height="14" rx="2" fill="#c41e3a" />
        <text
          x="35"
          y="48"
          textAnchor="middle"
          fill="#fff"
          fontSize="7"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          PDF
        </text>
      </svg>
    </div>
  );
}

export default function DataSheetPreview({
  title,
  fileUrl,
  previewImageUrl,
  productImageUrl,
  productImageAlt,
}: DataSheetPreviewProps) {
  const [pdfThumbnailUrl, setPdfThumbnailUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(Boolean(fileUrl && !previewImageUrl));

  useEffect(() => {
    if (previewImageUrl || !fileUrl) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    renderPdfThumbnailDataUrl(fileUrl).then((dataUrl) => {
      if (cancelled) return;
      setPdfThumbnailUrl(dataUrl);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [fileUrl, previewImageUrl]);

  const imageSrc = previewImageUrl ?? pdfThumbnailUrl ?? productImageUrl;
  const imageAlt = previewImageUrl
    ? `${title} preview`
    : pdfThumbnailUrl
      ? `${title} PDF preview`
      : productImageAlt || title;

  if (isLoading) {
    return (
      <div className="data-sheet-card__preview data-sheet-card__preview--loading">
        <span className="data-sheet-card__preview-loading">Loading preview…</span>
      </div>
    );
  }

  if (imageSrc) {
    return (
      <div className="data-sheet-card__preview">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="data-sheet-card__preview-image"
          loading="lazy"
        />
        {fileUrl && !previewImageUrl && !pdfThumbnailUrl && productImageUrl && (
          <span className="data-sheet-card__preview-badge">PDF</span>
        )}
      </div>
    );
  }

  return (
    <div className="data-sheet-card__preview data-sheet-card__preview--empty">
      <PdfPlaceholder />
    </div>
  );
}
