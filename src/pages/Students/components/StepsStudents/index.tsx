import { UseFormReturn } from "react-hook-form";
import { InformacoesGeraisStep } from "./InformacoesGeraisStep";
import { EnderecoStep } from "./EnderecoStep";
import { FormaPagamentoStep } from "./FormaPagamentoStep";
import { DocumentosStep } from "./DocumentosStep";

interface StudentFormStepsProps {
  control: UseFormReturn["control"];
  setValue: UseFormReturn["setValue"];
}
interface Step {
  title: string;
  content: any;
}

export function getStudentSteps({
  control,
  setValue,
}: StudentFormStepsProps): Step[] {
  return [
    {
      title: "Informações Gerais",
      content: <InformacoesGeraisStep control={control} />,
    },
    {
      title: "Endereço completo",
      content: <EnderecoStep control={control} setValue={setValue} />,
    },
    {
      title: "Forma de Pagamento",
      content: <FormaPagamentoStep control={control} setValue={setValue} />,
    },
    { title: "Documentos", content: <DocumentosStep setValue={setValue} /> },
  ];
}
