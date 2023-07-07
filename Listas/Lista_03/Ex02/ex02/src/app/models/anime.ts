export default class Anime {
    "nome": string;
    "lancamento": number;
    "quantidadeTemporadas": number;
    "genero": string;

    constructor(nome: string,
                lancamento: number,
                quantidadeTemporadas: number,
                genero: string)
    {
        this.nome = nome;
        this.lancamento = lancamento;
        this.quantidadeTemporadas = quantidadeTemporadas;
        this.genero = genero;
    }
}