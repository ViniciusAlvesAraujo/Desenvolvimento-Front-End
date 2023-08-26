import { Pagamento } from "./pagamento";

export interface PagamentoSaldoConsolidado {
  pagamento: Pagamento[];
  saldoConsolidadoDoDia: number;
}
