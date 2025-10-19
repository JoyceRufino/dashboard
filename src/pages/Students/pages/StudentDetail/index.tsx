import { BreadcrumbLink } from "@/components/BreadcrumbLink";
import { TabComponente } from "@/components/TabComponente";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Student } from "@/types/student";
import { formatDateBR } from "@/utils/formatDate";
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
    <div>
      <div className=" mb-5">
        <BreadcrumbLink
          items={[
            { label: "Home", href: "/" },
            { label: "Alunos", href: "/students" },
            { label: `Detalhe do Aluno: ${student?.name}`, active: true },
          ]}
        />
      </div>
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
                    <span className="bg-green-500 text-white px-3 py-1 rounded">
                      {student.statusRegistration}
                    </span>
                  </p>
                  <p>
                    <strong>CPF:</strong> {student.cpf}
                  </p>
                  <p></p>
                  <p>
                    <strong>RG:</strong> {student.rg}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div className="border p-3 rounded">
                    <strong>Endereço:</strong>
                    <div className="pl-4 space-y-1">
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
                    </div>
                  </div>
                  <div className="border p-3 rounded">
                    <strong>Contatos:</strong>
                    <div className="pl-4 space-y-1">
                      {student.contatos.map((c: any, index: number) => (
                        <p key={index} className="flex items-center gap-1">
                          <Phone size={12} className="text-muted-foreground" />
                          <span>
                            <strong>{c.tipo}:</strong> {c.contato}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border p-3 rounded mt-3">
                  <p>
                    <strong>Data de Cadastro:</strong>{" "}
                    {formatDateBR(student.date)}
                  </p>
                  <p>
                    <strong>Usuário Cadastro:</strong>{" "}
                    {formatDateBR(student.date)}
                  </p>
                  <p>
                    <strong>Data de Edição:</strong>{" "}
                    {formatDateBR(student.date)}
                  </p>
                  <p>
                    <strong>Usuário Edição:</strong>{" "}
                    {formatDateBR(student.date)}
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
          <>
            <Card className="mb-5">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2>
                  <strong>Status Financeiro:</strong> {student.statusFinancial}
                </h2>
                <Button>
                  <Edit />
                  Editar
                </Button>
              </CardHeader>

              <CardContent>
                {student.pagamento && (
                  <Card>
                    <CardHeader>Informações de Pagamento</CardHeader>
                    <CardContent className="space-y-3">
                      <p>
                        <strong>Tipo de Pagamento:</strong>{" "}
                        {student.pagamento.tipo_pagamento}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        {student.pagamento.status_pagamento}
                      </p>

                      {/* --- À VISTA --- */}
                      {student.pagamento.forma_pagamento === "avista" && (
                        <div className="space-y-1 mt-2">
                          <p>
                            <strong>Valor Total:</strong> R${" "}
                            {student.pagamento.valor_total?.toFixed(2)}
                          </p>
                          <p>
                            <strong>Desconto:</strong>{" "}
                            {student.pagamento.desconto ?? 0}%
                          </p>
                          <p>
                            <strong>Valor a Pagar:</strong> R${" "}
                            {student.pagamento.valor_a_pagar?.toFixed(2)}
                          </p>
                          <p>
                            <strong>Pagamento Realizado:</strong>{" "}
                            {student.pagamento.ja_pago ? "Sim" : "Não"}
                          </p>
                        </div>
                      )}

                      {/* --- CARTÃO --- */}
                      {student.pagamento.forma_pagamento === "cartao" && (
                        <div className="space-y-2 mt-2">
                          <p>
                            <strong>Data de Início da Cobrança:</strong>{" "}
                            {formatDateBR(
                              student.pagamento.data_inicio_cobranca
                            )}
                          </p>
                          <p>
                            <strong>Valor Total:</strong> R${" "}
                            {student.pagamento.valor_total?.toFixed(2)}
                          </p>

                          {student.pagamento.parcelas && (
                            <div className="mt-2">
                              <strong>Parcelas:</strong>
                              <ul className="pl-4 mt-1 list-disc">
                                {student.pagamento.parcelas.map(
                                  (p: any, i: any) => (
                                    <li key={i}>
                                      Parcela {p.numero}: R${" "}
                                      {p.valor.toFixed(2)} — Vencimento:{" "}
                                      {p.vencimento} —{" "}
                                      {p.pago ? "Pago" : "Pendente"}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* --- BOLETO --- */}
                      {student.pagamento.forma_pagamento === "boleto" && (
                        <div className="space-y-1 mt-2">
                          <p>
                            <strong>Parcelas:</strong>{" "}
                            {student.pagamento.parcelas_boleto}x
                          </p>
                          <p>
                            <strong>Data de Vencimento:</strong>{" "}
                            {student.pagamento.vencimento_boleto}
                          </p>
                          <p>
                            <strong>Valor por Parcela:</strong> R${" "}
                            {student.pagamento.valor_parcela_boleto?.toFixed(2)}
                          </p>
                          <p>
                            <strong>Valor Total:</strong> R${" "}
                            {student.pagamento.valor_total?.toFixed(2)}
                          </p>
                        </div>
                      )}

                      {/* --- PIX --- */}
                      {student.pagamento.forma_pagamento === "pix" && (
                        <div className="space-y-1 mt-2">
                          <p>
                            <strong>Valor Total:</strong> R${" "}
                            {student.pagamento.valor_total?.toFixed(2)}
                          </p>
                          <p>
                            <strong>Status:</strong>{" "}
                            {student.pagamento.status_pagamento}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </>
        </TabComponente.Tab>

        <TabComponente.Tab value="docs" title="Documentos" icon={<FileText />}>
          <>
            <Card>
              <CardHeader>Documentos</CardHeader>
              <CardContent className="space-y-1">
                {student.documentos.map((doc: any) => (
                  <p key={doc.uuid_documento}>{doc.tipo_documento}</p>
                ))}
              </CardContent>
            </Card>
          </>
        </TabComponente.Tab>
      </TabComponente>
    </div>
  );
};

export default StudentDetail;
