import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  { path: '', redirectTo:'/sophosTest/catalogComponent', pathMatch: 'full'},
  {
    path: 'sophosTest', component: NavbarComponent, children: [
      {path: 'catalogComponent', component: CatalogComponent},
      {path: 'ordersComponent', component: OrdersComponent},
      {path: 'carComponent', component: CarComponent}
    ]
  },

  { path: '**', redirectTo: '/sophosTest/catalogComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
