import React from "react";

interface MainButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: IconPosition;
  handleClick?: () => void;
  otherClasses?: string;
}
interface SlideTextMainButtonProps {
  defaultText: string;
  slideText: string;
  icon?: React.ReactNode;
  position?: IconPosition;
  handleClick?: () => void;
  otherClasses?: string;
}

export enum IconPosition {
  Left = "left",
  Right = "right",
}

export const MainButton = ({
  title,
  icon,
  position = IconPosition.Left,
  handleClick,
  otherClasses,
}: MainButtonProps) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === IconPosition.Left && icon}
        {title}
        {position === IconPosition.Right && icon}
      </span>
    </button>
  );
};

export const SlideTextMainButton = ({
  defaultText,
  slideText,
  icon,
  position = IconPosition.Left,
  handleClick,
  otherClasses,
}: SlideTextMainButtonProps) => {
  const Content = () => (
    <>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        <span className="group-hover/modal-btn:translate-x-60 text-center justify-center items-center transition duration-500 inline-flex h-full w-full gap-2">
          {position === IconPosition.Left && icon}
          {defaultText}
          {position === IconPosition.Right && icon}
        </span>
        <div className="-translate-x-60 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          {slideText}
        </div>
      </span>
    </>
  );

  //To avoid the case having a <button> component inside another, its returned as <div> if the click event is handled  by another component (for example: its used inside the <Modal> component)
  if (handleClick) {
    return (
      <button
        className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60"
        onClick={handleClick}
      >
        <Content />
      </button>
    );
  }

  return (
    <div
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60"
      onClick={handleClick}
    >
      <Content />
    </div>
  );
};
