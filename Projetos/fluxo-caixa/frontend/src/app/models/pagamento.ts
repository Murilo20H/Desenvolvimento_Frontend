export class Pagamento {
  public _id!: string;
  public descricao: string;
  public valorPagamento: number;
  public dataPagamento: Date;
  public tipoPagamento: string;

  constructor(
    descricao: string,
    valorPagamento: number,
    dataPagamento: Date,
    tipoPagamaneto: string
  ) {
    this.descricao = descricao;
    this.valorPagamento = valorPagamento;
    this.dataPagamento = dataPagamento;
    this.tipoPagamento = tipoPagamaneto;
  }
}
