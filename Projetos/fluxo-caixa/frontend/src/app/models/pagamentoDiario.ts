import { Pagamento } from "./pagamento";

export interface PagamentoDiario {
  pagamentos: Pagamento[];
  pagamentoTotalDoDia: number;
}
