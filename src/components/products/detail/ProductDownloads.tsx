import type { ProductDownload } from "@/types/product";

type ProductDownloadsProps = {
  downloads: ProductDownload[];
};

export default function ProductDownloads({ downloads }: ProductDownloadsProps) {
  return (
    <div id="downloads" className="di-downloads scroll-mt-32">
      {downloads.map((download) => (
        <a
          key={download.id}
          href={download.url}
          className="di-dl-btn"
          download
          title={download.fileSize ? `${download.label} (${download.fileSize})` : download.label}
        >
          {download.label}
        </a>
      ))}
    </div>
  );
}
