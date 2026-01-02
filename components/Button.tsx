"use client";

type Props = {
  content?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ content, onClick }: Props) {
  return (
    <button
      type="submit"
      className="
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
      {content}
    </button>
  );
}
