import { Component } from '@angular/core';
import Anime from 'src/app/models/anime';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent {
  public animes: Anime[] = new Array<Anime>();

  constructor() {
    this.animes.push(new Anime("One Piece", 1999, 20, "Ficção de aventura, Fantasia"))
    this.animes.push(new Anime("Naruto", 1999, 20, " Ficção de aventura, Fantasia cômica, Artes marciais"))
    this.animes.push(new Anime("Fairy tail", 2009, 9, "Ficção de aventura, Fantasia" ))
  }
}
