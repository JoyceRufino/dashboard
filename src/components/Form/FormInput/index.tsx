import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  name: string;
  control: Control<any>; // pode ajustar para seu tipo de formulário
  placeholder?: string;
  label?: string;
  maxLength?: number;
  rules?: any; // regras de validação do react-hook-form
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  placeholder,
  label,
  maxLength = 255,
  rules,
}) => {
  const [valueLength, setValueLength] = useState(0);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full">
          {label && (
            <Label htmlFor={name} className="mb-2">
              {label}
            </Label>
          )}
          <Input
            id={name}
            placeholder={placeholder}
            maxLength={maxLength}
            {...field}
            value={field.value || ""}
            onChange={(e) => {
              field.onChange(e);
              setValueLength(e.target.value.length);
            }}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {valueLength}/{maxLength}
          </div>
          {fieldState.error && (
            <span className="text-red-500 text-sm mt-1">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};
