import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pagamento } from 'src/app/models/pagamento';
import { PagamentoService } from 'src/app/services/pagamento.service';

@Component({
  selector: 'app-cadastrar-pagamento',
  templateUrl: './cadastrar-pagamento.component.html',
  styleUrls: ['./cadastrar-pagamento.component.css']
})
export class CadastrarPagamentoComponent {
  public descricao!: string;
  public valorPagamento!: number;
  public tipoPagamento!: string;
  public dataPagamento!: Date;

  constructor(private pagamentoService: PagamentoService, private router: Router) {}

  public adicionarPagamento() {
    let pagamento = new Pagamento(this.descricao, this.valorPagamento, this.dataPagamento, this.tipoPagamento);
    this.pagamentoService.AdicionarPagamento(pagamento).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(["/"])
  }
}
