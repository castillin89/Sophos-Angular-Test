import { Component, OnInit, Input, Inject } from '@angular/core';
import { UtilComponent } from 'src/app/utils/utils.component';
import { MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { RequestService } from 'src/app/services/request.service';
import { FormTemplateComponent } from '../form-template/form-template.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent extends UtilComponent implements OnInit {

  private orders: Array<object> = [];
  private disableButton: boolean = true;

  constructor(private dialogs: MatDialog,
    private snackBars: MatSnackBar, private request: RequestService) { 
    super(dialogs, snackBars, null);
  }

  ngOnInit() {
    this.request.listOrder.subscribe(inputData =>{
      this.orders = inputData;
      if (this.orders.length != 0){
        this.disableButton = false;
      }
      console.log(this.orders);
    })
  }
  
  openModal(){
    this.openDialog(FormTemplateComponent, this.orders);
  }

  afterCloseDialog(){
    this.orders = [];
    this.request.addOrder([]);
  }

}
