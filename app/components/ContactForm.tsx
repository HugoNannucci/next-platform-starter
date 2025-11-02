'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';
import { CheckCircle2, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Section } from "./Section";

export const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (!successMessage) return;
    const t = setTimeout(() => setSuccessMessage(false), 6000);
    return () => clearTimeout(t);
  }, [successMessage]);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_oukx0l5', 'template_fyg3wdq', form.current, {
          publicKey: 'C2fCmxe_QJ_MIDic7',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccessMessage(true);
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <Section id='contact' className="flex-1 flex-col items-start gap-4">
      <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary mb-5'>
        Contact
      </h2>
      {successMessage && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 flex items-start gap-2 rounded-md border border-green-200 bg-green-50 p-3 text-green-800"
        >
          <CheckCircle2 size={18} className="mt-0.5 text-green-600" />
          <div className="flex-1">
            <p className="font-medium">Message envoyé</p>
            <p className="text-sm">Merci pour votre message. Je vous répondrai rapidement.</p>
          </div>
          <button
            type="button"
            aria-label="Fermer la notification"
            onClick={() => setSuccessMessage(false)}
            className="ml-2 rounded p-1 text-green-700 hover:bg-green-100"
          >
            <X size={16} />
          </button>
        </div>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid w-full gap-2">
          <label>Nom Prénom</label>
          <Input type="text" name="name" />
          <label>Email</label>
          <Input type="email" name="email" />
          <label>Message</label>
          <Textarea name="message" />
          <Button className=' bg-orange-500'>Envoyer</Button>
        </div>
      </form>
    </Section>
  );
};
