import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CatalogComponent } from './components/catalog/catalog.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';
import { ImagesModalComponent } from './components/images-modal/images-modal.component';

registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NavbarComponent,
    CatalogComponent,
    OrdersComponent,
    FormTemplateComponent,
    ImagesModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent],
  entryComponents: [
    FormTemplateComponent,
    ImagesModalComponent
  ]
})
export class AppModule { }
