import { Pagamento } from "./pagamento";

export interface PagamentoSaldoConsolidado {
  pagamentos: Pagamento[];
  saldoConsolidadoDoDia: number;
}
