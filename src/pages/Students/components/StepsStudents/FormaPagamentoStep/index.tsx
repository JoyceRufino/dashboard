import { FormInput } from "@/components/Form/FormInput";
import { FormSelect } from "@/components/Form/FormSelect";
import React, { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import ParcelasInputs from "../../ParcelasInputs";
import { FormDateInput } from "@/components/Form/FormDate";

interface Props {
  control: UseFormReturn["control"];
  setValue: UseFormReturn["setValue"];
}

export const FormaPagamentoStep: React.FC<Props> = ({ control, setValue }) => {
  const [parcelasCount, setParcelasCount] = useState(1);

  return (
    <div className="space-y-4 mb-4">
      <div className="w-1/2">
        {" "}
        <FormInput
          name="price_base"
          control={control}
          placeholder="Valor total"
          label="Valor total base"
          showLength={false}
        />
      </div>
      <FormSelect
        name="formaPagamento"
        control={control}
        label="Selecione a Forma de Pagamento"
        placeholder="Selecione"
        options={[
          { label: "À vista", value: "avista" },
          { label: "Cartão de Crédito", value: "cartao" },
          { label: "Boleto Autoescola", value: "boleto" },
        ]}
      />

      <Controller
        name="formaPagamento"
        control={control}
        render={({ field }) => {
          const value = field.value;

          if (value === "cartao") {
            return (
              <>
                <FormDateInput
                  name="data_start_payment"
                  control={control}
                  label="Data de início da cobrança"
                />
                <ParcelasInputs
                  parcelasCount={parcelasCount}
                  setParcelasCount={setParcelasCount}
                  control={control}
                />
              </>
            );
          }

          if (value === "avista") {
            return (
              <div className="pt-3 mt-5">
                <div className="flex gap-4">
                  <FormInput
                    name="valorTotal"
                    control={control}
                    placeholder="Valor total"
                    label="Valor Total"
                  />
                  <FormInput
                    name="desconto"
                    control={control}
                    placeholder="Valor do desconto"
                    label="% Desconto"
                    maxLength={2}
                  />
                </div>

                <div className="flex gap-4">
                  <FormInput
                    name="valorAPagar"
                    control={control}
                    placeholder="Valor a pagar"
                    label="Valor a Pagar"
                  />
                  <FormSelect
                    name="jaPago"
                    control={control}
                    label="Pagamento realizado?"
                    placeholder="Selecione"
                    options={[
                      { label: "Sim", value: "sim" },
                      { label: "Não", value: "nao" },
                    ]}
                  />
                </div>
              </div>
            );
          }

          if (value === "boleto") {
            return (
              <div className=" mt-4">
                <div className="flex gap-3">
                  <FormSelect
                    name="parcelasBoleto"
                    control={control}
                    placeholder="Número de parcelas"
                    label="Parcelas"
                    options={[
                      { label: "1 x no boleto", value: "1" },
                      { label: "2 x no boleto", value: "2" },
                      { label: "3 x no boleto", value: "3" },
                      { label: "4 x no boleto", value: "4" },
                      { label: "5 x no boleto", value: "5" },
                    ]}
                  />
                  <FormDateInput
                    name="vencimentoBoleto"
                    control={control}
                    placeholder="Data de vencimento"
                    label="Vencimento"
                  />
                </div>
                <div className="w-1/2 mt-5">
                  <FormInput
                    name="valorParcelaBoleto"
                    control={control}
                    placeholder="Valor por parcela"
                    label="Valor por Parcela"
                  />
                </div>
              </div>
            );
          }

          return <></>;
        }}
      />
    </div>
  );
};
