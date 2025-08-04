"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

export default function Modal({ children, open, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    setModalContainer(document.getElementById("modal"));
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, [open, onClose]);

  if (!mounted || !modalContainer) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-auto w-full h-full bg-transparent p-0 border-none overflow-visible"
    >
      <div className="flex items-center justify-center h-full w-full rounded-[50px] backdrop-blur-sm bg-black/30">
        <div className="bg-white rounded-[20px] w-full max-w-[720px] p-[10px] ">
          {children}
        </div>
      </div>
    </dialog>,
    modalContainer
  );
}
