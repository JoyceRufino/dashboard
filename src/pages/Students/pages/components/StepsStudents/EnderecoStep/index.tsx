import React from "react";

import { UseFormReturn } from "react-hook-form";
import { buscarEndereco } from "@/services/cep";
import { formatCEP } from "@/utils/formatters";
import { FormInput } from "@/components/Form/FormInput";
import { FormSelect } from "@/components/Form/FormSelect";

interface Props {
  control: UseFormReturn["control"];
  setValue: UseFormReturn["setValue"];
}

export const EnderecoStep: React.FC<Props> = ({ control, setValue }) => (
  <div className="space-y-4">
    <div className="flex gap-4">
      <div className="flex-1">
        <FormInput
          name="cep"
          control={control}
          placeholder="Digite o CEP"
          label="CEP"
          format={formatCEP}
          showLength={false}
          onBlur={async (e) => {
            const cep = e.target.value;
            if (!cep) return;

            console.log("Buscando CEP:", cep);
            const endereco = await buscarEndereco(cep);
            console.log("Resultado CEP:", endereco);

            if (endereco) {
              setValue("logradouro", endereco.logradouro || "");
              setValue("bairro", endereco.bairro || "");
              setValue("cidade", endereco.localidade || "");
              setValue("estado", endereco.uf || "");
            }
          }}
        />
      </div>
      <div className="flex-1">
        <FormInput
          name="numero"
          control={control}
          placeholder="Digite o número"
          label="Número"
          showLength={false}
        />
      </div>
    </div>

    <FormInput
      name="logradouro"
      control={control}
      placeholder="Digite o logradouro (Rua, Avenida, etc.)"
      label="Logradouro"
      showLength={false}
    />

    <FormInput
      name="complemento"
      control={control}
      placeholder="Ex: Apto 101, Bloco B"
      label="Complemento"
      showLength={false}
    />

    <FormInput
      name="bairro"
      control={control}
      placeholder="Digite o bairro"
      label="Bairro"
      showLength={false}
    />

    <div className="flex gap-4">
      <div className="flex-1">
        <FormInput
          name="cidade"
          control={control}
          placeholder="Digite a cidade"
          label="Cidade"
          showLength={false}
        />
      </div>
      <div className="flex-1">
        <FormSelect
          name="estado"
          control={control}
          label="Estado"
          placeholder="Selecione"
          options={[
            { label: "SP", value: "SP" },
            { label: "RJ", value: "RJ" },
            { label: "MG", value: "MG" },
            { label: "RS", value: "RS" },
            { label: "Outros", value: "outros" },
          ]}
        />
      </div>
    </div>
  </div>
);
