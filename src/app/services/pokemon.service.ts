import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {
  pokemon: string;
  constructor(private _http: Http) {
    console.log('Pokemon Service Ready...');
    this.pokemon = 'bulbasaur';
  }

  getPokemon() {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/' + this.pokemon)
      .map(res => res.json());
    }

  updatePokemon(pokemon: string) {
        this.pokemon = pokemon;
    }

}
