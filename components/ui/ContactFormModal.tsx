"use client";
import React, { useState } from "react";
import { Label } from "./Label";
import { Input, TextArea } from "./Input";
import { cn } from "@/utils/cn";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./AnimatedModal";
import { FaLocationArrow, FaStar } from "react-icons/fa6";
import { IconPosition, SlideTextMainButton } from "./MainButton";
import { developerEmail } from "@/data";
import { HiXCircle } from "react-icons/hi2";

//TODO: Need to fix height responsive
//TODO: Character count

enum SubmitStatus {
  NONE = "NONE",
  PENDING = "PENDING",
  SENT = "SENT",
  ERROR = "ERROR",
}

export function AnimatedModalDemo() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(
    SubmitStatus.NONE
  );

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="p-0 group/modal-btn">
          <SlideTextMainButton
            defaultText={
              submitStatus === SubmitStatus.NONE
                ? "Let's get in touch"
                : "Thank you!"
            }
            slideText={submitStatus === SubmitStatus.NONE ? "🚀🚀🚀" : "🔮🔮🔮"}
            icon={
              submitStatus === SubmitStatus.NONE ? (
                <FaLocationArrow />
              ) : (
                <FaStar />
              )
            }
            position={IconPosition.Right}
          />
        </ModalTrigger>
        <ModalBody>
          <ModalContent
            className={cn(
              `${
                [SubmitStatus.SENT, SubmitStatus.ERROR].includes(
                  submitStatus
                ) && "md:p-0 p-0 h-full"
              }`
            )}
          >
            {submitStatus === SubmitStatus.SENT ? (
              <SubmitMessage />
            ) : submitStatus === SubmitStatus.ERROR ? (
              <ErrorMessage />
            ) : (
              <ContactForm
                submitStatus={submitStatus}
                setSubmitStatus={setSubmitStatus}
              />
            )}
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
/////////////////////////////////

export const SubmitMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center absolute h-full w-full -z-10">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Thank you for reaching out!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
        I&apos;ve received your message and will get back to you shortly.
      </p>
    </div>
  );
};

export const ErrorMessage = () => {
  return (
    <div className="flex flex-col justify-around items-center absolute h-full w-full -z-10 py-20">
      <HiXCircle color={"#2C2C31"} className={"h-20 w-20"} />
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Oops! Something went wrong.
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
        Please feel free to contact me directly at{" "}
        <span className="font-bold">{developerEmail}</span>, or try submitting
        the form again later.
      </p>
    </div>
  );
};

interface ContactFormProps {
  submitStatus: SubmitStatus;
  setSubmitStatus: React.Dispatch<React.SetStateAction<SubmitStatus>>;
}

export const ContactForm = ({
  submitStatus,
  setSubmitStatus,
}: ContactFormProps) => {
  async function handleSubmit(event: any) {
    event.preventDefault();
    setSubmitStatus(SubmitStatus.PENDING);
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Message sent successfully!", result);
      setSubmitStatus(SubmitStatus.SENT);
    } else {
      console.error("Message failed to send", result);
      setSubmitStatus(SubmitStatus.ERROR);
    }
  }

  return (
    <>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let&apos;s get in touch
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Have questions or ideas? Don&apos;t hesitate to reach out—we can
        collaborate and bring your projects to life!
      </p>

      <form className="flex flex-col mt-8 items-center" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">Name*</Label>
          <Input
            id="name"
            name="name"
            placeholder="Alex"
            type="text"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address*</Label>
          <Input
            id="email"
            name="email"
            placeholder="something@email.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message*</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Your message here..."
            required
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-1/2 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:scale-95 disabled:shadow-none disabled:opacity-90 disabled:bg-zinc-700 disabled:text-gray-700"
          type="submit"
          disabled={submitStatus === SubmitStatus.PENDING}
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
