import { PagamentoDiario } from 'src/app/models/pagamentoDiario';
import { PagamentoService } from 'src/app/services/pagamento.service';
import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/models/pagamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public pagamentos!: Pagamento[];
  public pagamentoDiario!: PagamentoDiario
  public colunas: string[] = ['descricao', 'valorPagamento', 'tipoPagamento', 'dataPagamento'];
  public dataReferencia!: Date;
  constructor(private pagamentoService: PagamentoService) {}

  ngOnInit(): void {
    this.pagamentoService.buscarPagamentos().subscribe((response: Pagamento[]) => {
      this.pagamentos = response
    });
  }

  public buscarPagamentoDiario() {
    this.pagamentoService.buscarPagamentosDiarios(this.dataReferencia).subscribe((response: PagamentoDiario) => {
      this.pagamentoDiario = response
      console.log(response)
      console.log(this.dataReferencia)
    });
  }
}
