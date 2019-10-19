import { Component, OnInit, Inject } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UtilComponent } from 'src/app/utils/utils.component';
import { ImagesModalComponent } from '../images-modal/images-modal.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent extends UtilComponent implements OnInit {

  products: Array<object> = [];
  orders: Array<object> = [];
  snackTime = 2000;

  constructor(private request: RequestService, private snackBars: MatSnackBar,
    private dialogs: MatDialog,
    ) { 
      super(dialogs, snackBars, null);
  }

  ngOnInit() {
    if (!localStorage.getItem("orderRegistered")) {
      localStorage.setItem("orderRegistered", JSON.stringify([]));
    }
    this.request.listOrder.subscribe(orders =>{
      this.orders = orders;
    })
    this.request.getProduct().subscribe(data => {
      this.products=data;
      this.products.forEach(product => {
        product['cantidadComprada'] = 0;
      });
      });
  }
  clickImage(product) {
    this.openDialog(ImagesModalComponent, product, "dialog-image");
  }

  topAvailable(selectedProduct: number, product: object) {

    if (selectedProduct > product['cantidadDisponible']) {
      product['cantidadComprada'] = product['cantidadDisponible'];
    } else {
      product['cantidadComprada'] =selectedProduct;
    }
  }

  buy(product: object){
    if (product['cantidadComprada'] != 0){
      if(this.orders.find(order => order['idProducto'] === product['idProducto'])){
        this.openSnackBar("Este producto ya esta agregado al carrito",'snack-bar-false');
      }else{
        this.orders.push(product);
        this.request.addOrder(this.orders);
        this.openSnackBar("Producto agregado al carrito", 'snack-bar-true'); 
      }
    }else{
      this.openSnackBar("Debe indicar cantidad a comprar");
    }
    

  }
}
