import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComingSoonComponent } from "./coming-soon.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: ComingSoonComponent,
  },
];

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  exports: [ComingSoonComponent],
  entryComponents: [ComingSoonComponent],
})
export class ComingSoonModule {}
