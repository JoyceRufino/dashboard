import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Student } from "@/types/student";
import { formatDateBR } from "@/utils/formatDate";
import { Edit } from "lucide-react";
import React from "react";

interface PaymentProps {
  student: Student;
}

const Payment: React.FC<PaymentProps> = ({ student }) => {
  return (
    <div>
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
                  <strong>Status:</strong> {student.pagamento.status_pagamento}
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
                      {formatDateBR(student.pagamento.data_inicio_cobranca)}
                    </p>
                    <p>
                      <strong>Valor Total:</strong> R${" "}
                      {student.pagamento.valor_total?.toFixed(2)}
                    </p>

                    {student.pagamento.parcelas && (
                      <div className="mt-2">
                        <strong>Parcelas:</strong>
                        <ul className="pl-4 mt-1 list-disc">
                          {student.pagamento.parcelas.map((p: any, i: any) => (
                            <li key={i}>
                              Parcela {p.numero}: R$ {p.valor.toFixed(2)} —
                              Vencimento: {p.vencimento} —{" "}
                              {p.pago ? "Pago" : "Pendente"}
                            </li>
                          ))}
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
    </div>
  );
};

export default Payment;
