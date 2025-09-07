import React from "react";
import { Controller, Control } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // ShadCN select

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps {
  name: string;
  control: Control<any>; // do react-hook-form
  options: Option[];
  placeholder?: string;
  label?: string;
  rules?: any; // validação do react-hook-form
}

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  control,
  options,
  placeholder,
  label,
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full">
          {label && <label className="mb-1 text-sm font-medium">{label}</label>}
          <Select {...field}>
            <SelectTrigger>
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
