"use client";

import { ReactNode } from "react";

type Props = {
  content?: string;
  icon?: ReactNode;
  color?: string;
  colorHover?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  content,
  icon,
  color = "var(--accent)",
  colorHover = "var(--accent-2)",
  onClick,
}: Props) {
  return (
    <button
      type="button"
      style={{
        "--btn-bg": color,
        "--btn-bg-hover": colorHover,
      } as React.CSSProperties}
      className={`
        flex items-center justify-center gap-2
        text-white font-bold shadow
        transition-colors duration-200

        bg-[var(--btn-bg)]
        hover:bg-[var(--btn-bg-hover)]

        px-6 py-3
        w-[70%] max-w-[300px] min-w-[150px]
      `}
      onClick={onClick}
    >
      {icon}
      <span>{content}</span>
    </button>
  );
}
