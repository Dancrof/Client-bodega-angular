import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { UserRoutingModule } from '../dinamyc/user/user-routing.module';
import { ProductRoutingModule } from '../dinamyc/product/product-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    ProductRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class StaticModule { }
