import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  showFooter?: boolean;
  submitLabel?: string;
  closeLabel?: string;
  secondaryButtonLabel?: string; // novo botão
  onSecondaryClick?: () => void; // função do novo botão
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  onSubmit,
  title,
  description,
  children,
  showFooter = true,
  submitLabel = "Salvar",
  closeLabel = "Fechar",
  secondaryButtonLabel,
  onSecondaryClick,
}) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className="py-4">{children}</div>

        {showFooter && (
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              {closeLabel}
            </Button>

            {secondaryButtonLabel && onSecondaryClick && (
              <Button variant="secondary" onClick={onSecondaryClick}>
                {secondaryButtonLabel}
              </Button>
            )}

            {onSubmit && (
              <Button onClick={onSubmit} type="button">
                {submitLabel}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
