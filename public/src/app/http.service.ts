import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getPokemon() {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/59/');
    
  }
  getAbility() {
    return this._http.get('https://pokeapi.co/api/v2/pokemon/59/');
  }

  justified() {
    return this._http.get('https://pokeapi.co/api/v2/ability/154/');
  }

  flash_fire() {
    return this._http.get('https://pokeapi.co/api/v2/ability/18/');
  }

  intimidate() {
    return this._http.get('https://pokeapi.co/api/v2/ability/22/');
  }
}
