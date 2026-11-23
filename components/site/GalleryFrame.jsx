import MediaPlaceholder from "./MediaPlaceholder";

export default function GalleryFrame({ image, index, className = "" }) {
  return (
    <figure className={`group relative overflow-hidden bg-card ${className}`}>
      <MediaPlaceholder
        className="absolute inset-0 h-full w-full transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
        iconClassName="h-8 w-8 sm:h-10 sm:w-10"
      />
      <span className="pointer-events-none absolute inset-0 border border-primary/0 transition-colors duration-500 group-hover:border-primary/25" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
        <figcaption className="text-[9px] uppercase tracking-[0.28em] text-foreground/85 sm:text-[10px]">
          {image.caption}
        </figcaption>
        <span className="font-mono text-[9px] tracking-[0.2em] text-primary/70">{index}</span>
      </div>
    </figure>
  );
}