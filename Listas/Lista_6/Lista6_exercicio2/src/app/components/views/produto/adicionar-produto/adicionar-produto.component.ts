import { ProdutoService } from 'src/app/services/produto.service';
import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  public nomeDoProduto!: string;
  public descricaoDoProduto!: string;
  public imagemDoProduto!: string;
  public valorDoProduto!: number;
  public categoriaDoProduto!: string;

  constructor(private produtoService: ProdutoService, private router: Router) {}

  public adicionarProduto() {
    let produto = new Produto(this.nomeDoProduto, this.descricaoDoProduto, this.imagemDoProduto, this.valorDoProduto, this.categoriaDoProduto);
    this.produtoService.AdicionarProduto(produto).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(["/"])
  }
}
