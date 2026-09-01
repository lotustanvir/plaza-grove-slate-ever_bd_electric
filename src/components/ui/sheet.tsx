import type { ComponentProps } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  ...props
}: ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-surface p-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-foreground)_12%,transparent)]",
          className,
        )}
        {...props}
      >
        <div className="mb-6 flex items-center justify-between">
          <Dialog.Title className="text-sm font-medium">Navigate</Dialog.Title>
          <Dialog.Close className="inline-flex size-11 items-center justify-center rounded-md text-muted hover:text-foreground">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
