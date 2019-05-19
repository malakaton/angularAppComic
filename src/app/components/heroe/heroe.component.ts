import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRouter: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRouter.params.subscribe( params => {
        this.heroe = heroesService.getHeroe( params.id );
      } );
  }
}
