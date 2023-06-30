import { Component } from '@angular/core';
import Analista from 'src/app/models/analista';
import Funcionario from 'src/app/models/funcionario';
import Gestor from 'src/app/models/gestor';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {
  title = 'Lista2_exercicio1';
  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Fred", 6552, "Gestor de TI", [])

  constructor() {
    this.analistas.push(new Analista("Jorge", 2556, "Analista de redes", this.gestor.nome));
    this.analistas.push(new Analista("Rony", 2050, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Percy", 5020, "Analista de Atendimento a Clientes", this.gestor.nome));
    this.analistas.push(new Analista("Ginny", 7005, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Molly", 1308, "Analista de cloud", this.gestor.nome));
    this.analistas.push(new Analista("Bill", 4022, "Analista de segurança", this.gestor.nome));
    this.analistas.push(new Analista("Charlie", 1415, "Analista administrativo de vendas", this.gestor.nome));
    this.analistas.push(new Analista("Melody", 1512, "Analista administrativo financeiro", this.gestor.nome));
    this.analistas.push(new Analista("Eric", 1932, "Analista ambiental", this.gestor.nome));
    this.analistas.push(new Analista("Buzz", 4825, "Analista comercial interno", this.gestor.nome));
    this.analistas.push(new Analista("Murilo", 2020, "Analista comercial externo", this.gestor.nome));
    this.analistas.push(new Analista("Rayanne", 3385, "Analista de atendimento comercial", this.gestor.nome));
    this.analistas.push(new Analista("Demi", 3266, "Analista de banco", this.gestor.nome));
    this.analistas.push(new Analista("Taylor", 1989, "Analista de banco de dados", this.gestor.nome));
    this.analistas.push(new Analista("Elena", 2849, "Analista de cargos e salários", this.gestor.nome));
    this.analistas.push(new Analista("Eliane", 6024, "Analista de compras", this.gestor.nome));
    this.analistas.push(new Analista("Cláudio", 9241, "Analista de contabilidade", this.gestor.nome));
    this.analistas.push(new Analista("Lucas", 2568, "Analista de controladoria", this.gestor.nome));
    this.analistas.push(new Analista("Gustavo", 9079, "Analista de custos", this.gestor.nome));

    this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }
}