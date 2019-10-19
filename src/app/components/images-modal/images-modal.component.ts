import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-images-modal',
  templateUrl: './images-modal.component.html',
  styleUrls: ['./images-modal.component.scss']
})
export class ImagesModalComponent implements OnInit {

  private product: object;

  constructor(@Inject(MAT_DIALOG_DATA) DATA, private dialogRef: MatDialogRef<ImagesModalComponent>) { 
    this.product = DATA;
  }

  ngOnInit() {
  }

  closeImage(){
    this.dialogRef.close();
  }
}
