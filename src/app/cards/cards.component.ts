import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/posts';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/cards/dialog/dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  @Input() cards?:Post[];
  panelOpenState = false;

  ngOnInit(): void {
  }

  openDialog(){
  	const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
    });
  }

}
