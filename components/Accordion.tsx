"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  title: string;
  content: ReactNode; // Flexibler Inhalt: Text, JSX, Buttons, Links, etc.
};

type AccordionProps = {
  items: AccordionItem[];
  miniText?: string;
  allowMultipleOpen?: boolean;
  hrColor?: string;
};

export default function Accordion({
  items,
  miniText,
  allowMultipleOpen = false,
  hrColor = "gray-300",
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (allowMultipleOpen) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes[0] === index ? [] : [index]);
    }
  };

  return (
    <div className="space-y-6">
      {miniText && (
        <p className="text-sm tracking-wide text-gray-500">{miniText}</p>
      )}

      <ul className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <li key={index} className={`border-b border-${hrColor} pb-4`}>
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left flex items-start justify-between gap-4 group"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <ChevronDown
                  className={`mt-1 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-sm text-gray-700 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
