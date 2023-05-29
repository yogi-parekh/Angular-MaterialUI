import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./home-page.component";
import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule } from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
    FooterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
