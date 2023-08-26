import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pagamento } from '../models/pagamento';
import { env } from '../environments/env';
import { PagamentoSaldoConsolidado } from '../models/pagamentoSaldoConsolidado';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private baseUrl = env.baseUrl;
  constructor(private http: HttpClient) { }

  public buscarPagamentos(): Observable<Pagamento[]>{
    return this.http.get<Pagamento[]>(`${this.baseUrl}/listar-pagamentos`);
  }
  public buscarPagamentosComSaldoConsolidado(dataReferencia: any): Observable<PagamentoSaldoConsolidado>{
    return this.http.get<PagamentoSaldoConsolidado>(`${this.baseUrl}/listar-saldo-consolidado?dataReferencia=${dataReferencia}`);
  }
}
