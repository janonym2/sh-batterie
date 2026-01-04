"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

type Item = {
  title: string;
  description: string;
  href?: string;
};

export default function AccordionBulletPoints({
  items,
  miniText,
}: {
  items: Item[];
  miniText?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="space-y-6">
      {miniText && (
        <p className="text-sm tracking-wide text-gray-500">
          {miniText}
        </p>
      )}

      <ul className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <li
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="w-full text-left flex items-start justify-between gap-4 group"
              >
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>

                <ChevronDown
                  className={`mt-1 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                {item.href && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(item.href || '#');
                    }}
                    className="mt-3 inline-flex items-center text-sm font-medium text-black hover:underline hover:text-[var(--accent)]"
                  >
                    Mehr erfahren →
                  </button>
                )}
              </div>

            </li>
          );
        })}
      </ul>
    </div>
  );
}
