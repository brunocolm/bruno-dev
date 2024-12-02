import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const isMobile = (): boolean => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
