"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ReactNode } from "react";

interface InfoModalProps {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
}

export function InfoModal({ trigger, title, children }: InfoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-white text-foreground rounded-3xl max-w-[90vw] sm:max-w-sm md:max-w-md shadow-2xl border-4 border-primary">
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl md:text-3xl font-black text-center leading-tight">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="text-center text-base md:text-lg text-foreground/90 leading-relaxed px-2">
            {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
