export interface Contato {
  contato: string;
  tipo: "celular" | "telefone";
}

export interface Endereco {
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface Pagamento {
  tipo_pagamento: "Cartão de crédito" | "Pix" | "Boleto Auto Escola";
  status_pagamento: "Em dia" | "Pendência";
}

export interface Documento {
  tipo_documento: "CPF" | "RG" | "Comprovante de residência" | string;
  uuid_documento: string;
}

export interface Student {
  uuid_student: string;
  name: string;
  cpf: string;
  statusRegistration: "Ativo" | "Inativo";
  statusFinancial: "Em dia" | "Pendência" | string;
  date: string;
  rg?: string;
  contatos?: Contato[];
  endereco?: Endereco;
  pagamento?: Pagamento;
  documentos?: Documento[];
}
