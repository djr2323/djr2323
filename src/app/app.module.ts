import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsArlertComponent } from './products-arlert/products-arlert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ChonsoComponent } from './chonso/chonso.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'getData',component: GetDataComponent},
      {path:'ReactiveForm', component: ReactiveFormComponent},
      {path:'form',component: TemplateDrivenFormComponent},
      {path: '', component: ProductListComponent },
      {path: 'products/:productId', component:ProductDetailsComponent},
      {path:'cart',component:CartComponent},
      {path:'shipping',component:ShippingComponent},
      {path:'chonso',component:ChonsoComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductsArlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ChonsoComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/