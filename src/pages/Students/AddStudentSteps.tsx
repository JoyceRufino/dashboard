import { Controller, UseFormReturn } from "react-hook-form";
import { FormInput } from "@/components/Form/FormInput";
import { FormSelect } from "@/components/Form/FormSelect";
import { formatCPF, formatPhone, formatRG } from "@/utils/formatters";
import { FormInputMoreContacts } from "@/components/Form/FormInputMoreContacts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StudentFormStepsProps {
  control: UseFormReturn["control"];
}

interface Step {
  title: string;
  content: any;
}

export function getStudentSteps({ control }: StudentFormStepsProps): Step[] {
  const [parcelasCount, setParcelasCount] = useState<number>(1); // ✅ topo do componente

  return [
    {
      title: "Informações Gerais",
      content: (
        <div className="space-y-3">
          <FormInput
            name="nomeCompleto"
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
            <FormInputMoreContacts
              name="contacts"
              label="Contatos"
              placeholder="Digite o telefone de contato"
              control={control}
              format={formatPhone}
              maxLength={15}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Endereço completo",
      content: (
        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="flex-1">
              <FormInput
                name="cep"
                control={control}
                placeholder="Digite o CEP"
                label="CEP"
                maxLength={9}
              />
            </div>
            <div className="flex-1">
              <FormInput
                name="numero"
                control={control}
                placeholder="Digite o número"
                label="Número"
                maxLength={10}
              />
            </div>
          </div>

          <FormInput
            name="logradouro"
            control={control}
            placeholder="Digite o logradouro (Rua, Avenida, etc.)"
            label="Logradouro"
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

          <div className="flex gap-4">
            <div className="flex-1">
              <FormInput
                name="cidade"
                control={control}
                placeholder="Digite a cidade"
                label="Cidade"
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
      ),
    },

    {
      title: "Forma de Pagamento",
      content: (
        <div className="space-y-3 mb-4">
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
                  <div className="space-y-2 mt-4">
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
                      <div key={index} className="flex gap-4">
                        <FormInput
                          name={`parcelasValores[${index}].valor`}
                          control={control}
                          placeholder="Valor da parcela"
                          label={`Parcela ${index + 1}`}
                        />
                        <FormInput
                          name={`parcelasValores[${index}].validade`}
                          control={control}
                          placeholder="Validade (MM/AA)"
                          label="Validade"
                        />
                      </div>
                    ))}
                  </div>
                );
              }

              if (value === "avista") {
                return (
                  <div className="space-y-4 mt-4">
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
                  <div className="space-y-4 mt-4">
                    <FormInput
                      name="parcelasBoleto"
                      control={control}
                      placeholder="Número de parcelas"
                      label="Parcelas"
                    />
                    <FormInput
                      name="valorTotalBoleto"
                      control={control}
                      placeholder="Valor total do boleto"
                      label="Valor Total"
                    />
                    <FormInput
                      name="valorParcelaBoleto"
                      control={control}
                      placeholder="Valor por parcela"
                      label="Valor por Parcela"
                    />
                    <FormInput
                      name="vencimentoBoleto"
                      control={control}
                      placeholder="Data de vencimento"
                      label="Vencimento"
                    />
                  </div>
                );
              }

              return <></>;
            }}
          />
        </div>
      ),
    },
    {
      title: "Documentos",
      content: (
        <div className="flex gap-4">
          <Card className="flex-1 flex flex-col justify-between h-full">
            <CardHeader>CPF</CardHeader>
            <CardContent className="flex justify-center items-center">
              <Button>Upload CPF</Button>
            </CardContent>
          </Card>
          <Card className="flex-1 flex flex-col justify-between h-full">
            <CardHeader>RG</CardHeader>
            <CardContent className="flex justify-center items-center">
              <Button>Upload RG</Button>
            </CardContent>
          </Card>
          <Card className="flex-1 flex flex-col justify-between h-full">
            <CardHeader>Comprovante de Residência</CardHeader>
            <CardContent className="flex justify-center items-center">
              <Button>Upload Residência</Button>
            </CardContent>
          </Card>
        </div>
      ),
    },
  ];
}
