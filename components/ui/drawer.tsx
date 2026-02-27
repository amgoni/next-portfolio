"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, type Variants } from "motion/react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
}

export default function Drawer({
  isOpen,
  onClose,
  children,
  side = "right",
}: DrawerProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const slideVariants: Variants = {
    initial: {
      x: side === "left" ? "-100%" : "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 200 },
    },
    exit: {
      x: side === "left" ? "-100%" : "100%",
      opacity: 0,
      transition: { type: "tween", duration: 0.2 },
    },
  };

  const backdropVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="drawer-backdrop"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={backdropVariants}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer-content"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
            className={`fixed top-0 bottom-0 z-50 flex w-[70%] flex-col bg-gradient-to-br from-[#3a7bd5] to-dark-text shadow-xl ${
              side === "left" ? "left-0" : "right-0"
            }`}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="cursor-pointer text-white text-2xl p-2 hover:opacity-70 transition-opacity"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden text-white">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
