import { Component, VERSION } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular ";
  ver = VERSION.full;
  myMoney: number = 100000.653;
  yourMoney: number = 5.3495;
  constructor(private _location: Location) {
    _location.go("/foo");
  }

  backClicked() {
    this._location.back();
  }

  forwardClicked() {
    this._location.back();
  }
}
