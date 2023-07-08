export default class Pokemon {
  pokedex: number;
  nome: string;
  tipo: string;
  altura: string;
  peso: string;
  categoria: string;
  habilidades: string;
  imagem: URL;

  constructor(pokedex: number, nome: string, tipo: string, altura: string, peso: string, categoria: string, habilidades: string, imagem: URL) {
    this.pokedex = pokedex;
    this.nome = nome;
    this.tipo = tipo;
    this.altura = altura;
    this.peso = peso;
    this.categoria = categoria;
    this.habilidades = habilidades;
    this.imagem = imagem;
  }
}
