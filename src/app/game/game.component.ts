import { Component } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  cardAnimation:boolean = false;
  currentCard:string = "";
  game:Game;
  gameCards:number[] = [1,2,3,4,5];

  constructor() {
    this.game = new Game();
    this.init();
  }

  init() {
    console.log(this.game);
  }

  takeCard() {
    this.cardAnimation = true;
    this.currentCard = this.game.stack.pop() || "";
    console.log(this.currentCard)
  }
}
