import React from "react";
import { Controller, Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
  label?: string;
  rules?: any;
  onValueChange?: (value: string) => void; // nova prop
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  control,
  options,
  placeholder,
  label,
  rules,
  onValueChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full">
          {label && (
            <label htmlFor={name} className="mb-1 text-sm font-medium">
              {label}
            </label>
          )}

          <Select
            {...field}
            value={field.value ?? ""}
            onValueChange={(val) => {
              field.onChange(val);
              if (onValueChange) onValueChange(val); // chama callback externo
            }}
          >
            <SelectTrigger id={name}>
              <SelectValue placeholder={placeholder || "Selecione..."} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={String(option.value)}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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
