import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nameApp = "Nombre App";
  showApp = false;

  apps = [
    {title: "Catálogo", icon: "menu_book", link:"catalogComponent"},
    {title: "Carrito", icon: "add_shopping_cart", link:"carComponent"},
    {title: "Pedidos", icon: "file_copy", link:"ordersComponent"}
  ];

  menuList = [
    {title: "Catálogo", icon: "menu_book", link:"catalogComponent"},
    {title: "Carrito", icon: "add_shopping_cart", link:"carComponent"},
    {title: "Pedidos", icon: "file_copy", link:"ordersComponent"}
  ]

  ngOnInit() {
    this.showApp = true;
  }

  closeWindow(){
    window.close();
  }
}