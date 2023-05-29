import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "faq",
    loadChildren: () => import("./faq/faq.module").then((m) => m.FaqModule),
  },
  {
    path: "pricing",
    loadChildren: () =>
      import("./pricing/pricing.module").then((m) => m.PricingModule),
  },
  {
    path: "coming-soon",
    loadChildren: () =>
      import("./coming-soon/coming-soon.module").then(
        (m) => m.ComingSoonModule
      ),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
  entryComponents: [AppComponent],
})
export class AppRoutingModule {}
