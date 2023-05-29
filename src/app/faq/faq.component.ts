import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // When the user clicks on the button, scroll to the top of the document
   goTotop() {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }

}
