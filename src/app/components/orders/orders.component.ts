import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort } from 'node_modules copy/@angular/material/sort';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  private displayedColumns: Array<String> = [];
  private orders: Array<String> = [];
  private dataSource;
  private paginator: MatPaginator;
  private sort: MatSort;
  private oneResult: Boolean = false;

  constructor() { }

  displayedColumnsNames = {
    idOrder: "ID",
    nombre: "Nombre Cliente",
    fechaNacimiento: "Fecha de Nacimiento",
    direccion: "Dirección",
    ciudad: "Ciudad"
  };
  
  ngOnInit(){
    this.displayedColumns = Object.keys(this.displayedColumnsNames);
    this.orders = JSON.parse(localStorage.getItem("orderRegistered"));
    this.dataSource = new MatTableDataSource(this.orders);
    console.log(this.orders);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  ngOnChanges() {
    this.tableTranslate();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.orders.length == 1) {
      this.oneResult = true;
    }
  }

  tableTranslate() {
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.nextPageLabel = 'Siguiente';
  }


}
