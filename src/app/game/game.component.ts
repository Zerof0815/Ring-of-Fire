import { Component } from '@angular/core';
import { Game } from '../models/game';
import { PlayerComponent } from "../player/player.component";
import { NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [PlayerComponent, NgStyle, MatButtonModule, MatIconModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  cardAnimation:boolean = false;
  currentCard:string = "";
  game:Game;
  gameCards:number[] = [1,2,3,4,5];

  constructor(public dialog: MatDialog) {
    this.game = new Game();
  }

  init() {}

  takeCard() {
    if (this.cardAnimation) return;
    this.cardAnimation = true;
    this.currentCard = this.game.stack.pop() || "";
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
    
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.cardAnimation = false;
    }, 1250);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (!name) return;
      this.game.players.push(name);
    });
  }
}
