"use client"

import { Phone, Mail, MessageSquare } from "lucide-react";
import Button from "@/components/Button";

type Props = {
  title?: string;
};

export default function CallToAction({ title }: Props) {
  return (
    <div>
        {!title ? '' : (
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
            </h2>
        )}
        <div className="flex flex-col gap-4 pt-2">
          <Button content="Anrufen" onClick={() => alert("Hallo!")} icon={<Phone size={18} />}/>
          <Button content="Mail senden" onClick={() => alert("Hallo!")} icon={<Mail size={18} />} />
          <Button content="Anfrageformular" onClick={() => alert("Hallo!")} icon={<MessageSquare size={18} />} />
        </div>
    </div>
  );
}
