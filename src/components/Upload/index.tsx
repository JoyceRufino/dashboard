import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // ícone de remover
import { cn } from "@/lib/utils";

interface UploadProps {
  label: string;
  onFileSelect: (file: File | null) => void; // pode retornar null quando remover
  className?: string;
  accept?: string;
}

export const Upload: React.FC<UploadProps> = ({
  label,
  onFileSelect,
  className,
  accept,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
    onFileSelect(null);
  };

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else if (file.type === "application/pdf") {
      setPreview("PDF: " + file.name);
    } else {
      setPreview("Arquivo: " + file.name);
    }
  }, [file]);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      {preview && (
        <div className="relative mt-2 mb-5 border rounded-lg p-2 w-48 flex flex-col items-center bg-gray-50 shadow-sm">
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-1 right-1 text-gray-500 hover:text-red-500"
          >
            <X size={16} />
          </button>

          {file?.type.startsWith("image/") ? (
            <img
              src={preview}
              alt="preview"
              className="h-24 w-auto rounded-md object-cover"
            />
          ) : (
            <span className="text-sm text-gray-700 text-center">{preview}</span>
          )}
        </div>
      )}

      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleChange}
        accept={accept}
      />

      <Button type="button" onClick={handleClick}>
        {label}
      </Button>
    </div>
  );
};
