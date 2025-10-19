import { FormDateInput } from "@/components/Form/FormDate";
import { FormInput } from "@/components/Form/FormInput";
import { FormSelect } from "@/components/Form/FormSelect";
import { Controller, UseFormReturn } from "react-hook-form";

interface ParcelasInputsProps {
  parcelasCount: number;
  setParcelasCount: (count: number) => void;
  control: UseFormReturn["control"];
}

const ParcelasInputs: React.FC<ParcelasInputsProps> = ({
  parcelasCount,
  setParcelasCount,
  control,
}) => {
  return (
    <div className="space-y-4 mt-4">
      <Controller
        name="parcelas"
        control={control}
        render={({ field }) => (
          <FormSelect
            {...field}
            control={control}
            label="Número de Parcelas"
            placeholder="Selecione"
            options={[...Array(12)].map((_, i) => ({
              label: `${i + 1}x no cartão`,
              value: String(i + 1),
            }))}
            onValueChange={(val: string) => {
              field.onChange(val);
              setParcelasCount(Number(val));
            }}
          />
        )}
      />
      {[...Array(parcelasCount)].map((_, index) => (
        <div key={index} className="flex gap-2 p-3 bg-gray-100 rounded">
          <FormInput
            name={`parcelasValores[${index}].valor`}
            control={control}
            placeholder="Valor da parcela"
            label={`Parcela ${index + 1}`}
            showLength={false}
          />
          <FormDateInput
            name={`parcelasValores[${index}].validade`}
            control={control}
            label="Validade"
          />
        </div>
      ))}
    </div>
  );
};

export default ParcelasInputs;
