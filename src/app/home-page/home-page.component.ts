import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // variables

  constructor() { }

  // Angular life cycle calls
  ngOnInit() {
  }


 
  // When the user clicks on the button, scroll to the top of the document
  goTotop() {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }
}
