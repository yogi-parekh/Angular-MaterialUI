import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { PricingComponent } from "./pricing.component";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";

const routes: Routes = [
  {
    path: '',
    component: PricingComponent
  }
]

@NgModule({
  declarations: [
    PricingComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    PricingComponent
  ]
})
export class PricingModule { }
