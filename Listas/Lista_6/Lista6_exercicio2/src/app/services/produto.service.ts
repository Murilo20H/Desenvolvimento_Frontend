import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:8060/listar-produtos");
  }

  public AdicionarProduto(produto: Produto): Observable<string> {
    return this.http.post<string>("http://localhost:8060/adicionar-produto", produto);
  }
}
