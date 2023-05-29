import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // When the user clicks on the button, scroll to the top of the document
   goTotop() {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }

}
