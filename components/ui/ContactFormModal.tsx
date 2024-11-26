"use client";
import React from "react";
import { Label } from "./Label";
import { Input, TextArea } from "./Input";
import { cn } from "@/utils/cn";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./AnimatedModal";
import { FaLocationArrow } from "react-icons/fa6";
import { IconPosition, SlideTextMainButton } from "./MainButton";

//TODO: Need to fix height responsive
//TODO: Character count

export function AnimatedModalDemo() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="p-0 group/modal-btn">
          <SlideTextMainButton
            defaultText="Let's get in touch"
            slideText="🚀🚀🚀"
            icon={<FaLocationArrow />}
            position={IconPosition.Right}
          />
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <ContactForm />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
/////////////////////////////////

export const ContactForm = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY as any);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let&apos;s get in touch
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Have questions or ideas? Don’t hesitate to reach out—we can collaborate
        and bring your projects to life!
      </p>

      <form className="flex flex-col mt-8 items-center" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">Name*</Label>
          <Input id="name" placeholder="Alex" type="text" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address*</Label>
          <Input
            id="email"
            placeholder="something@email.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message*</Label>
          <TextArea id="message" placeholder="Your message here..." required />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/2 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
        </button>
      </form>
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
