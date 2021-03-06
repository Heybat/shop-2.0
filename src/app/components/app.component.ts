import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  route: string;
  navLinks = [
    { path: "login", label: "Login" },
    { path: "registration", label: "Registration" }
  ];

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
      }
    });
  }
}
