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
      "https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_086_tina_frey_hanging_planter_1-1340x7851.jpg",
      "https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_086_tina_frey_hanging_planter_1-1340x7851.jpg",
      "https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_086_tina_frey_hanging_planter_1-1340x7851.jpg",
      "https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_086_tina_frey_hanging_planter_1-1340x7851.jpg",
      "https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_086_tina_frey_hanging_planter_1-1340x7851.jpg"
    ];
  }

  ngOnInit() {}
}
