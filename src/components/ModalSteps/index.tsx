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
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

export const ModalSteps: React.FC<ModalStepsProps> = ({
  open,
  onClose,
  steps,
  onSubmit,
  onSaveDraft,
  title,
  description,
  size = "md",
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
    "3xl": "w-full max-w-[90vw]",
  };

  const widthClass = sizeClassMap[size] || "sm:max-w-md";

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className={`${widthClass} max-h-[95vh] flex flex-col`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}

          {/* Stepper */}
          <div className="flex items-center justify-center gap-2 p-2  ">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* Círculo do step */}
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-semibold
            ${
              index === currentStep
                ? "bg-secondary text-secondary-foreground"
                : "bg-muted text-muted-foreground"
            }
          `}
                >
                  {index + 1}
                </div>
                <div
                  className={` font-semibold
            ${
              index === currentStep
                ? "text-secondary"
                : " text-muted-foreground"
            }
          `}
                >
                  {step.title}
                </div>

                {/* Linha entre os steps */}
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 rounded-full
              ${index < currentStep ? "bg-primary" : "bg-muted"}
            `}
                  />
                )}
              </div>
            ))}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4 p-2">
          <h3 className="font-semibold mb-5">{steps[currentStep].title}</h3>
          {steps[currentStep].content}
        </div>

        <DialogFooter className="flex justify-between flex-col gap-2 pt-4 border-t">
          {/* Navegação */}
          <div className="flex gap-2 p-3 rounded-md">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft />
                Voltar
              </Button>
            )}
            {!isLastStep && (
              <Button onClick={handleNext}>
                Próximo
                <ChevronRight />
              </Button>
            )}
          </div>

          {/* Ações */}
          <div className="flex gap-2 justify-end mt-2">
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
