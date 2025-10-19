import React from "react";
import { UseFormReturn } from "react-hook-form";
import CardUploadFiles from "../../CardUploadFiles";

interface Props {
  setValue: UseFormReturn["setValue"];
}

export const DocumentosStep: React.FC<Props> = ({ setValue }) => (
  <div className="flex gap-4">
    <CardUploadFiles
      labelCard="CPF"
      labelUpload="Upload CPF"
      onFileSelect={(file) => setValue("cpfFile", file)}
    />
    <CardUploadFiles
      labelCard="RG"
      labelUpload="Upload RG"
      onFileSelect={(file) => setValue("rgFile", file)}
    />
    <CardUploadFiles
      labelCard="Comprovante de Residência"
      labelUpload="Upload Comprovante"
      onFileSelect={(file) => setValue("crFile", file)}
    />
  </div>
);
