import { Component } from '@angular/core';
import Pokemon from 'src/app/models/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Lista3_exercicio2';
  public pokemons: Pokemon[] = new Array<Pokemon>();

  constructor() {
    this.pokemons.push(new Pokemon(1, "Bulbasaur", "grass/poison", "0,7 m", "6,9 kg", "seed", "overgrow", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png")));
    this.pokemons.push(new Pokemon(2, "Ivysaur", "grass/poison", "1 m", "13 kg", "seed", "overgrow", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png")));
    this.pokemons.push(new Pokemon(3, "Venusaur", "grass/poison", "2 m", "100 kg", "seed", "overgrow", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png")));
    this.pokemons.push(new Pokemon(4, "Charmander", "fire", "0,6 m", "8,5 kg", "lizard", "blaze", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png")));
    this.pokemons.push(new Pokemon(5, "Charmeleon", "fire", "1,1 m", "19 kg", "flame", "blaze", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png")));
    this.pokemons.push(new Pokemon(6, "Charizard", "fire/flying", "1,7 m", "90,5 kg", "flame", "blaze", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png")));
    this.pokemons.push(new Pokemon(7, "Squirtle", "water", "0,5 m", "9 kg", "tiny turtle", "torrent", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png")));
    this.pokemons.push(new Pokemon(8, "Wartortle", "water", "1 m", "22,5 kg", "turtle", "torrent", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png")));
    this.pokemons.push(new Pokemon(9, "Blastoise", "water", "1,6 m", "85,5 kg", "shellfish", "torrent", new URL ("https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png")));
  }
}
