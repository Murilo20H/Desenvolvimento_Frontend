import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private animalService: AnimalService) {}

  public animais!: Animal[];

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((response: Animal[]) => {
      this.animais = response
    })
  }
}
