import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Student } from "@/types/student";
import React from "react";

interface GeralProps {
  student: Student;
}

const Document: React.FC<GeralProps> = ({ student }) => {
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>Documentos</CardHeader>
        <CardContent className="space-y-1">
          {student.documentos.map((doc: any) => (
            <p key={doc.uuid_documento}>{doc.tipo_documento}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Document;
