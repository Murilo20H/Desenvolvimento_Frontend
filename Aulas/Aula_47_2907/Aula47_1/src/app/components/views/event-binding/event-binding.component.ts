import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  public cliqueAqui(){
    alert('Usuário clicou')
  }

  public digitando(event: KeyboardEvent){
    console.log(event)
  }

  public pressionouEnter() {
    alert('Enter pressionado!')
  }

  public passouMouse() {
    console.log('Usuário entrou com o mouse!')
  }

  public tirouMouse() {
    console.log('Usuário saiu com o mouse!')
  }
}
