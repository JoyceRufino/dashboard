import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Upload } from "@/components/Upload";
import React from "react";

interface CardUploadFilesProps {
  labelCard: string;
  labelUpload: string;
  accept?: string;
  onFileSelect: (file: File | null) => void;
  className?: string;
}

const CardUploadFiles: React.FC<CardUploadFilesProps> = ({
  labelCard,
  labelUpload,
  accept = ".pdf,.jpg,.png",
  onFileSelect,
  className,
}) => {
  return (
    <Card
      className={`flex-1 flex flex-col justify-between h-full ${
        className || ""
      }`}
    >
      <CardHeader>{labelCard}</CardHeader>
      <CardContent className="flex justify-center items-center">
        <Upload
          label={labelUpload}
          accept={accept}
          onFileSelect={onFileSelect}
        />
      </CardContent>
    </Card>
  );
};

export default CardUploadFiles;
