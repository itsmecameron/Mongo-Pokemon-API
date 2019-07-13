import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Pokemon';
    constructor(private _httpService: HttpService) {
        this.getPokemon();
        this.getAbility();
        this.justified();
        this.flash_fire();
        this.intimidate();
    }

    getPokemon() {
        let pokemonObservable = this._httpService.getPokemon()
        pokemonObservable.subscribe(
            data => {
                console.log("Got our Pokemon!", data);
                // this.pokemon = data['pokemon']
            }
        )
    }

    getAbility() {
        let ability = this._httpService.getAbility();
        ability.subscribe(
            data => {
                console.log(`Got our Pokemon Abilities for ${data.name}! ${data.abilities[0].ability.name} , ${data.abilities[1].ability.name} and ${data.abilities[2].ability.name}`
                )
            }
        );
    };

    justified() {
        let justified = this._httpService.justified()
        justified.subscribe(
            data => {
                console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability`
                )
            }
        );
    };

    flash_fire() {
        let flash_fire = this._httpService.flash_fire()
        flash_fire.subscribe(
            data => {
                console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability`
                )
            }
        );
    };

    intimidate() {
        let intimidate = this._httpService.intimidate()
        intimidate.subscribe(
            data => {
                console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability`
                )
            }
        );
    };
};
