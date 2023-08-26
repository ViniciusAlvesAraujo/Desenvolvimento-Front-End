export class Pagamento {
  public _id!: string;
  public descricao: string;
  public valorPagamento: number;
  public dataPagamento: Date;
  public tipoPagamento: String;

  constructor(descricao: string,
    valorPagamento: number,
    dataPagamento: Date,
    tipoPagamento: String)
  {
    this.descricao = descricao;
    this.valorPagamento = valorPagamento;
    this.dataPagamento = dataPagamento;
    this.tipoPagamento = tipoPagamento;
  }
}
