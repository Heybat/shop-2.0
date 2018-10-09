import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  counter: number = 0;
  pictures: string[] = [
    "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
  ];

  constructor() {}

  ngOnInit() {}
  left() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.counter = this.pictures.length - 1;
    }
  }

  right() {
    if (this.counter < this.pictures.length - 1) {
      this.counter++;
    } else {
      this.counter = 0;
    }
  }
}
