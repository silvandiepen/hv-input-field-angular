import { Component } from "@angular/core";

import "hv-styleguide";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  JSON: any = JSON;
  form = {
    firstName: "Angular",
    lastName: "Example"
  };
}
