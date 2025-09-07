import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Step {
  title: string;
  content: React.ReactNode;
}

interface ModalStepsProps {
  open: boolean;
  onClose: () => void;
  steps: Step[];
  onSubmit: () => void;
  onSaveDraft?: () => void;
  title: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl"; // nova prop
}

export const ModalSteps: React.FC<ModalStepsProps> = ({
  open,
  onClose,
  steps,
  onSubmit,
  onSaveDraft,
  title,
  description,
  size = "md", // valor padrão
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const sizeClassMap: Record<string, string> = {
    sm: "w-full max-w-sm",
    md: "w-full max-w-md",
    lg: "w-full max-w-lg",
    xl: "w-full max-w-xl",
    "2xl": "w-full max-w-2xl",
  };
  const widthClass = sizeClassMap[size] || "sm:max-w-md";

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className={`${widthClass} max-h-[85vh] flex flex-col`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4 p-2">
          <h3 className="font-semibold mb-2">{steps[currentStep].title}</h3>
          {steps[currentStep].content}
        </div>

        <DialogFooter className="flex justify-between items-center gap-4 pt-4 border-t">
          <div className="flex gap-2">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handleBack}>
                Voltar
              </Button>
            )}
            {!isLastStep && <Button onClick={handleNext}>Próximo</Button>}
          </div>

          <div className="flex gap-2">
            {onSaveDraft && (
              <Button variant="secondary" onClick={onSaveDraft}>
                Salvar Rascunho
              </Button>
            )}
            {isLastStep && <Button onClick={onSubmit}>Finalizar</Button>}
            <Button variant="outline" onClick={onClose}>
              Fechar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
