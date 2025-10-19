import React from "react";
import { FormInput } from "@/components/Form/FormInput";
import { FormInputMoreContacts } from "@/components/Form/FormInputMoreContacts";
import { formatCPF, formatPhone, formatRG } from "@/utils/formatters";
import { UseFormReturn } from "react-hook-form";

interface Props {
  control: UseFormReturn["control"];
}

export const InformacoesGeraisStep: React.FC<Props> = ({ control }) => (
  <div className="space-y-2">
    <FormInput
      name="name"
      control={control}
      placeholder="Digite o nome completo"
      label="Nome Completo"
      maxLength={255}
      rules={{ required: "O nome é obrigatório" }}
    />

    <div className="flex gap-4">
      <div className="flex-1">
        <FormInput
          name="cpf"
          control={control}
          placeholder="Digite o CPF"
          label="CPF"
          maxLength={14}
          format={formatCPF}
        />
      </div>
      <div className="flex-1">
        <FormInput
          name="rg"
          control={control}
          placeholder="Digite o RG"
          label="RG"
          maxLength={12}
          format={formatRG}
        />
      </div>
    </div>

    <div className="w-1/2">
      <div className="">
        <FormInputMoreContacts
          name="contacts"
          label="Contatos"
          placeholder="Digite o telefone de contato"
          control={control}
          format={formatPhone}
          maxLength={15}
          showType={true}
        />
      </div>
    </div>
  </div>
);
