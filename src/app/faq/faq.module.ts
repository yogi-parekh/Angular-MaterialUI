import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FaqComponent } from "./faq.component";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";
import { MatExpansionModule } from "@angular/material";


const routes: Routes  = [
  {
    path: '',
    component: FaqComponent
  }
]

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatExpansionModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    FaqComponent
  ],
  entryComponents: [
    FaqComponent
  ]
})
export class FaqModule { }
