import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  pokemon: any;
  name: string;

  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemon = false;
  }

  searchPokemon() {
    this._pokemonService.updatePokemon(this.name);

    this._pokemonService.getPokemon().subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}
