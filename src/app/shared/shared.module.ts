import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from "@angular/material";
import { HeaderModule } from "../header/header.module";
import { FooterModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class SharedModule {}
