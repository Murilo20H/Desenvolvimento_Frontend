import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from '../models/pagamento';
import { PagamentoDiario } from '../models/pagamentoDiario';
import { env } from '../environments/env';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private readonly baseUrl = env.baseUrl
  constructor(private http: HttpClient) { }

  public buscarPagamentos(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(`${this.baseUrl}/listar-pagamentos`);
  }

  public buscarPagamentosDiarios(dataReferencia: Date): Observable<PagamentoDiario> {
    return this.http.get<PagamentoDiario>(`${this.baseUrl}/listar-pagamentos-diarios?dataPagamento=${dataReferencia}`);
  }

  public AdicionarPagamento(pagamento: Pagamento): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/cadastrar-pagamento`, pagamento);
  }
}
