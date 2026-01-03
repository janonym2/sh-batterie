"use client";

type BannerProps = {
  content?: string;
};

export default function Banner({ content }: BannerProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[var(--accent)] md:opacity-80"></div>
      <div className="relative px-6 py-4 text-3xl font-bold md:px-15 md:py-10 md:text-5xl tracking-widest break-words leading-snug whitespace-pre-line text-[var(--lightgray)]">
        {content}
      </div>
    </div>
  );
}
