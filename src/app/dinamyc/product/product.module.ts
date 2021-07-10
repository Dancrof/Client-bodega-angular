import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { StaticModule } from 'src/app/static/static.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StaticModule,
    MaterialModule
  ]
})
export class ProductModule { }
