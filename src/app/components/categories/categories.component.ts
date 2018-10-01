import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  pictures: string[];

  constructor() {
    this.pictures = [
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg",
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg",
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
    ];
  }

  ngOnInit() {}
}
