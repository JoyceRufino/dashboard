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

// ---------------------- PAGAMENTO ----------------------

export interface Parcela {
  numero: number;
  valor: number;
  vencimento: string; // ISO date string
  pago: boolean;
}

export interface Pagamento {
  tipo_pagamento: "Cartão de crédito" | "À vista" | "Boleto Autoescola" | "Pix";
  status_pagamento: "Em dia" | "Pendência" | "Aguardando pagamento" | "Pago";

  // campos comuns
  forma_pagamento?: "cartao" | "avista" | "boleto" | "pix";
  valor_total?: number;

  // --- Pagamento com cartão ---
  data_inicio_cobranca?: string; // ISO date
  parcelas?: Parcela[];

  // --- Pagamento à vista ---
  desconto?: number; // percentual (%)
  valor_a_pagar?: number;
  ja_pago?: boolean;

  // --- Pagamento com boleto ---
  parcelas_boleto?: number;
  vencimento_boleto?: string;
  valor_parcela_boleto?: number;
}

export interface Documento {
  tipo_documento: "CPF" | "RG" | "Comprovante de residência" | string;
  uuid_documento: string;
}

// ---------------------- STUDENT ----------------------

export interface Student {
  uuid_student: string;
  name: string;
  cpf: string;
  rg?: string;

  statusRegistration: "Ativo" | "Inativo";
  statusFinancial: "Em dia" | "Pendência" | "Aguardando pagamento" | string;

  date: string;

  contatos?: Contato[];
  endereco?: Endereco;
  pagamento?: Pagamento;
  documentos?: Documento[];
}
