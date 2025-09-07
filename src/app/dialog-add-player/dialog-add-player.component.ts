import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    MatFormField, 
    MatLabel, 
    MatDialogModule, 
    MatInputModule, 
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = "";
  readonly dialogRef = inject(MatDialogRef<DialogAddPlayerComponent>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
