import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-border",
  templateUrl: "./border.component.html",
  styleUrls: ["./border.component.scss"]
})
export class BorderComponent implements OnInit {
  @Input()
  text: string;

  constructor() {}

  ngOnInit() {}
}
