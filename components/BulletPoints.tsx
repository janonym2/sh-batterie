"use client";
import { CheckCircleIcon } from "lucide-react";

interface BulletPointsProps {
  items: string[];
  miniText?: string;
  iconColor?: string;
}

export default function BulletPoints({ items, miniText, iconColor }: BulletPointsProps) {
  return (
    <div className="space-y-4">
      <ul className="space-y-4 py-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircleIcon className={`mt-1 w-6 h-6 flex-shrink-0 ${!iconColor ? '' : 'text-' + iconColor}`} />
            <span className="text-lg md:text-xl">
              {item}
            </span>
          </li>
        ))}
      </ul>
      {miniText && (
        <p className="text-sm md:text-base mt-2">
          {miniText}
        </p>
      )}
    </div>
  );
}
