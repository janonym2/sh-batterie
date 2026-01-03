"use client";

import { ReactNode } from "react";

type Props = {
  content?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ content, icon, onClick }: Props) {
  return (
    <button
      type="submit"
      className="
        flex items-center justify-center gap-2
        text-white 
        font-bold 
        shadow 
        transition 
        bg-[var(--accent)] 
        hover:bg-[var(--accent-2)]
        px-6 py-3
        w-[70%] 
        max-w-[300px] 
        min-w-[150px] 
        h-auto 
        text-center
      "
      onClick={onClick}
    >
      {icon}
      <span>{content}</span>
    </button>
  );
}
