import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  name: string;
  control: Control<any>;
  placeholder?: string;
  label?: string;
  maxLength?: number;
  rules?: any;
  format?: (value: string) => string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  placeholder,
  label,
  maxLength = 255,
  rules,
  format,
  onBlur,
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
              let value = e.target.value;
              if (format) value = format(value);
              field.onChange(value);
            }}
            onBlur={(e) => {
              field.onBlur();
              if (onBlur) onBlur(e);
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
