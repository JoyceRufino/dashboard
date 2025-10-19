import { TabComponente } from "@/components/TabComponente";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Student } from "@/types/student";
import { Edit, FileText, Phone, User } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

interface Props {
  student: Student;
}

const StudentDetail: React.FC<Props> = () => {
  const location = useLocation();
  const student = location.state?.student;

  return (
    <div className="">
      <TabComponente defaultValue="info" lazy>
        <TabComponente.Tab
          value="info"
          title="Informações Gerais"
          icon={<User />}
        >
          <>
            <Card className="mb-5">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2>Informações Gerais</h2>
                <Button>
                  <Edit />
                  Editar
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 p-2">
                  <p>
                    <strong>Nome:</strong> {student?.name}
                  </p>
                  <p>
                    <strong>Status de Registro:</strong>{" "}
                    {student.statusRegistration}
                  </p>
                  <p>
                    <strong>CPF:</strong> {student.cpf}
                  </p>
                  <p>
                    <strong>RG:</strong> {student.rg}
                  </p>

                  <div className="col-span-2">
                    <strong>Contatos:</strong>
                    <div className="pl-4 space-y-1">
                      {student.contatos.map((c: any, index: number) => (
                        <p key={index}>
                          <strong className="flex items-center gap-1">
                            {" "}
                            <Phone
                              size={12}
                              className="text-muted-foreground"
                            />
                            {c.tipo}:
                          </strong>{" "}
                          {c.contato}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  {student && (
                    <>
                      <h2>Endereço</h2>
                      <p>
                        <strong>Logradouro:</strong>{" "}
                        {student.endereco.logradouro}, {student.endereco.numero}{" "}
                        {student.endereco.complemento &&
                          `- ${student.endereco.complemento}`}
                      </p>
                      <p>
                        <strong>Bairro:</strong> {student.endereco.bairro}
                      </p>
                      <p>
                        <strong>Cidade/Estado:</strong>{" "}
                        {student.endereco.cidade} - {student.endereco.estado}
                      </p>
                      <p>
                        <strong>CEP:</strong> {student.endereco.cep}
                      </p>
                    </>
                  )}
                </div>
                <hr />
                <div className="mt-4 flex flex-row items-center justify-between p-2">
                  <p>
                    <strong>Data de Cadastro:</strong> {student.date}
                  </p>
                  <p>
                    <strong>Usuário Cadastro:</strong> {student.date}
                  </p>
                  <p>
                    <strong>Data de Edição:</strong> {student.date}
                  </p>
                  <p>
                    <strong>Usuário Edição:</strong> {student.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        </TabComponente.Tab>

        <TabComponente.Tab
          value="payment"
          title="Pagamento"
          icon={<FileText />}
        >
          <p>
            <strong>Status Financeiro:</strong> {student.statusFinancial}
          </p>
        </TabComponente.Tab>

        <TabComponente.Tab value="docs" title="Documentos" icon={<FileText />}>
          <>
            {student && (
              <>
                <Card>
                  <CardHeader>Pagamento</CardHeader>
                  <CardContent className="space-y-1">
                    <p>
                      <strong>Tipo de Pagamento:</strong>{" "}
                      {student.pagamento.tipo_pagamento}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {student.pagamento.status_pagamento}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>Documentos</CardHeader>
                  <CardContent className="space-y-1">
                    {student.documentos.map((doc: any) => (
                      <p key={doc.uuid_documento}>{doc.tipo_documento}</p>
                    ))}
                  </CardContent>
                </Card>
              </>
            )}
          </>
        </TabComponente.Tab>
      </TabComponente>
    </div>
  );
};

export default StudentDetail;
