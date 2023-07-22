import { AnimalService } from 'src/app/services/animal.service';
import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {
  public nomeDoAnimal!: string;
  public racaDoAnimal!: string;
  public pesoDoAnimal!: number;

  constructor(private animalService: AnimalService, private router: Router) {}

  public adicionarAnimal() {
    let animal = new Animal(this.nomeDoAnimal, this.racaDoAnimal, this.pesoDoAnimal);
    this.animalService.AdicionarAnimal(animal).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(["/"])
  }
}
