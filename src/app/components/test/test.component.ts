import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { swing } from "ng-animate";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
  animations: [trigger("swing", [transition("* => *", useAnimation(swing))])]
})
export class TestComponent implements OnInit {
  swing: any;
  constructor() {}

  ngOnInit() {}
}
