"use client"

import { Phone, Mail, MessageSquare } from "lucide-react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  phone: string;
  email: string;
};

export default function CallToAction({ title, phone, email }: Props) {
  const router = useRouter();

  return (
    <div>
        {!title ? '' : (
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
            </h2>
        )}
        <div className="flex flex-col gap-4 pt-2">
          <a href={`tel:${phone}`}>
            <Button content="Anrufen" icon={<Phone size={18} />}/>
          </a>
          <a href={`mailto:${email}?subject=Batterie-Anfrage`}>
            <Button content="Mail senden" icon={<Mail size={18} />} />
          </a>
          <Button
            content="Anfrageformular"
            onClick={() => router.push('/anfrage')}
            icon={<MessageSquare size={18} />}
          />
        </div>
    </div>
  );
}
