// src/components/Students/StudentFormSteps.ts
import { UseFormReturn } from "react-hook-form";
import { FormInput } from "@/components/Form/FormInput";
import { FormSelect } from "@/components/Form/FormSelect";

interface StudentFormStepsProps {
  control: UseFormReturn["control"];
}

interface Step {
  title: string;
  content: any;
}

// função que retorna os steps
export function getStudentSteps({ control }: StudentFormStepsProps): Step[] {
  return [
    {
      title: "Informações Gerais",
      content: (
        <div className="space-y-4">
          <FormInput
            name="nomeCompleto"
            control={control}
            placeholder="Digite o nome completo"
            label="Nome Completo"
            maxLength={255}
            rules={{ required: "O nome é obrigatório" }}
          />
          <FormInput
            name="cpf"
            control={control}
            placeholder="Digite o CPF"
            label="CPF"
            maxLength={14}
          />
          <FormInput
            name="rg"
            control={control}
            placeholder="Digite o RG"
            label="RG"
            maxLength={12}
          />
          <FormInput
            name="contact_student"
            control={control}
            placeholder="Digite o telefone de contato"
            label="Contato"
            maxLength={12}
          />
        </div>
      ),
    },
    {
      title: "Endereço",
      content: (
        <div className="space-y-4">
          <FormInput
            name="cep"
            control={control}
            placeholder="Digite o CEP"
            label="CEP"
            maxLength={9}
          />
          <FormInput
            name="logradouro"
            control={control}
            placeholder="Digite o logradouro (Rua, Avenida, etc.)"
            label="Logradouro"
          />
          <FormInput
            name="numero"
            control={control}
            placeholder="Digite o número"
            label="Número"
            maxLength={10}
          />
          <FormInput
            name="complemento"
            control={control}
            placeholder="Ex: Apto 101, Bloco B"
            label="Complemento"
          />
          <FormInput
            name="bairro"
            control={control}
            placeholder="Digite o bairro"
            label="Bairro"
          />
          <FormInput
            name="cidade"
            control={control}
            placeholder="Digite a cidade"
            label="Cidade"
          />
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
      ),
    },
    {
      title: "Forma de Pagamento",
      content: (
        <div className="space-y-4">
          <FormSelect
            name="formaPagamento"
            control={control}
            label="Forma de Pagamento"
            placeholder="Selecione"
            options={[
              { label: "Pix", value: "pix" },
              { label: "Cartão", value: "cartao" },
              { label: "Dinheiro", value: "dinheiro" },
            ]}
          />
          <FormSelect
            name="status"
            control={control}
            label="Status"
            placeholder="Selecione"
            options={[
              { label: "Ativo", value: "Ativo" },
              { label: "Inativo", value: "Inativo" },
            ]}
          />
        </div>
      ),
    },
  ];
}
