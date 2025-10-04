import React from "react";
import { Controller, Control, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CirclePlus, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactItem {
  value: string;
  type?: "celular" | "telefone";
}

interface FormInputMoreContactsProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  rules?: any;
  format?: (value: string) => string;
  showType?: boolean;
}

export const FormInputMoreContacts: React.FC<FormInputMoreContactsProps> = ({
  name,
  control,
  label,
  placeholder,
  maxLength = 255,
  rules,
  format,
  showType = false,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  if (fields.length === 0) {
    append({ value: "", type: "celular" });
  }
  return (
    <div className="space-y-2">
      {label && <Label className="font-semibold">{label}</Label>}

      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 w-full items-center">
          {showType && (
            <Controller
              name={`${name}.${index}.type`}
              control={control}
              defaultValue={field.id || "celular"}
              render={({ field: f }) => (
                <Select {...f} onValueChange={f.onChange}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celular">Celular</SelectItem>
                    <SelectItem value="telefone">Telefone</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          )}
          <Controller
            name={`${name}.${index}.value`}
            control={control}
            rules={rules}
            defaultValue={field.id || ""}
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

          <div className="w-[150px]">
            {" "}
            {index > 0 && (
              <Button variant={"link"} onClick={() => remove(index)}>
                <Trash2 className="text-red-500" />
              </Button>
            )}
          </div>
        </div>
      ))}

      <div className="mt-1">
        <Button
          type="button"
          size="sm"
          variant={"link"}
          onClick={() => append({ value: "", type: "celular" })}
        >
          <CirclePlus className="mr-1" />
          Adicionar mais contatos
        </Button>
      </div>
    </div>
  );
};
