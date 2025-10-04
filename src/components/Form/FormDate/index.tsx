import React from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormDateInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  rules?: any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormDateInput: React.FC<FormDateInputProps> = ({
  name,
  control,
  label,
  placeholder,
  rules,
  onBlur,
}) => {
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
            type="date"
            placeholder={placeholder}
            {...field}
            onBlur={(e) => {
              field.onBlur();
              if (onBlur) onBlur(e);
            }}
            className="bg-white"
          />
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
