import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
