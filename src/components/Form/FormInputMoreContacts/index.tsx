import React from "react";
import { Controller, Control, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CirclePlus, Trash2 } from "lucide-react";

interface FormInputMoreContactsProps {
  name: string; // ex: "contacts"
  control: Control<any>;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  rules?: any;
  format?: (value: string) => string;
}

export const FormInputMoreContacts: React.FC<FormInputMoreContactsProps> = ({
  name,
  control,
  label,
  placeholder,
  maxLength = 255,
  rules,
  format,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  // Garante que sempre tenha pelo menos um contato
  if (fields.length === 0) {
    append({ value: "" });
  }

  return (
    <div className="space-y-2 w-full">
      {label && <Label className="font-semibold">{label}</Label>}

      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 items-center">
          <Controller
            name={`${name}.${index}.value`}
            control={control}
            rules={rules}
            defaultValue={field || ""}
            render={({ field: f, fieldState }) => (
              <div className="flex flex-col w-full">
                <Input
                  {...f}
                  placeholder={placeholder}
                  value={f.value || ""}
                  maxLength={maxLength}
                  onChange={(e) => {
                    let v = e.target.value;
                    if (format) v = format(v);
                    f.onChange(v);
                  }}
                />
                {fieldState.error && (
                  <span className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
          {index > 0 && (
            <Button variant={"link"} onClick={() => remove(index)}>
              <Trash2 className="text-danger" />
            </Button>
          )}
        </div>
      ))}

      <div className="mt-1">
        <Button
          type="button"
          size="sm"
          variant={"link"}
          onClick={() => append({ value: "" })}
        >
          <CirclePlus />
          Adicionar mais contatos
        </Button>
      </div>
    </div>
  );
};
