import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Student } from "@/types/student";
import { Edit, Phone } from "lucide-react";
import { formatDateBR } from "@/utils/formatDate";

interface GeralProps {
  student: Student;
}

const Geral: React.FC<GeralProps> = ({ student }) => {
  return (
    <div>
      <Card className="mb-5">
        <CardHeader className="flex flex-row items-center justify-between">
          <h2>Informações Gerais</h2>
          <Button>
            <Edit size={16} />
            Editar
          </Button>
        </CardHeader>

        <CardContent>
          {/* --- Informações principais --- */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 p-2">
            <p>
              <strong>Nome:</strong> {student?.name}
            </p>
            <p>
              <strong>Status de Registro:</strong>{" "}
              <span
                className={`px-3 py-1 rounded text-white ${
                  student.statusRegistration === "Ativo"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {student.statusRegistration}
              </span>
            </p>
            <p>
              <strong>CPF:</strong> {student.cpf}
            </p>
            <p>
              <strong>RG:</strong> {student.rg ?? "-"}
            </p>
          </div>

          {/* --- Endereço e Contatos --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Endereço */}
            <div className="border p-3 rounded">
              <strong>Endereço:</strong>
              {student.endereco ? (
                <div className="pl-4 space-y-1 mt-1">
                  <p>
                    <strong>Logradouro:</strong> {student.endereco.logradouro},{" "}
                    {student.endereco.numero}
                    {student.endereco.complemento &&
                      ` - ${student.endereco.complemento}`}
                  </p>
                  <p>
                    <strong>Bairro:</strong> {student.endereco.bairro}
                  </p>
                  <p>
                    <strong>Cidade/Estado:</strong> {student.endereco.cidade} -{" "}
                    {student.endereco.estado}
                  </p>
                  <p>
                    <strong>CEP:</strong> {student.endereco.cep}
                  </p>
                </div>
              ) : (
                <p className="text-muted-foreground pl-4 mt-1">
                  Nenhum endereço cadastrado.
                </p>
              )}
            </div>

            {/* Contatos */}
            <div className="border p-3 rounded">
              <strong>Contatos:</strong>
              {student.contatos && student.contatos.length > 0 ? (
                <div className="pl-4 space-y-1 mt-1">
                  {student.contatos.map((c, index) => (
                    <p key={index} className="flex items-center gap-2">
                      <Phone size={12} className="text-muted-foreground" />
                      <span>
                        <strong>{c.tipo}:</strong> {c.contato}
                      </span>
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground pl-4 mt-1">
                  Nenhum contato cadastrado.
                </p>
              )}
            </div>
          </div>

          {/* --- Datas e Usuários --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border p-3 rounded mt-3">
            <p>
              <strong>Data de Cadastro:</strong> {formatDateBR(student.date)}
            </p>
            <p>
              <strong>Usuário Cadastro:</strong> Admin
            </p>
            <p>
              <strong>Data de Edição:</strong> {formatDateBR(student.date)}
            </p>
            <p>
              <strong>Usuário Edição:</strong> Admin
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Geral;
