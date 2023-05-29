import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Termhelper";
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 56 ||
      document.documentElement.scrollTop > 56
    ) {
      document.getElementById("toolbar").classList.add("on-scroll");
      document.getElementById("myBtn").style.display = "block";
      for (let i = 1; i <= 8; i++) {
        if (document.getElementById("service_item_" + i)) {
          document
            .getElementById("service_item_" + i)
            .classList.add("animate__fadeInUp");
          document
            .getElementById("service_item_" + i)
            .classList.add("animate__animated");
        }
      }
    } else {
      if (document.getElementById("myBtn")) {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("toolbar").classList.remove("on-scroll");
      }
    }
    if (
      document.body.scrollTop > 750 ||
      document.documentElement.scrollTop > 750
    ) {
      if (document.getElementById("solution")) {
        document.getElementById("solution").classList.add("animate__fadeInUp");
        document.getElementById("solution").classList.add("animate__animated");
      }
    }
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      if (document.getElementById("solution2")) {
        document.getElementById("solution2").classList.add("animate__fadeInUp");
        document.getElementById("solution2").classList.add("animate__animated");
      }
    }
  }
}
