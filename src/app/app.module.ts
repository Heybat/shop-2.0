import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./components/app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navigation/navbar/navbar.component";
import { HamburgerComponent } from "./components/navigation//hamburger/hamburger.component";
import { SidebarComponent } from "./components/navigation//sidebar/sidebar.component";
import { TestComponent } from "./components/test/test.component";
import { NavItemsComponent } from "./components/navigation//nav-items/nav-items.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { Test2Component } from "./components/test2/test2.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { LatestProductsComponent } from "./components/latest-products/latest-products.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RoutingModule } from "./modules/routing/routing.module";
import { ProductsComponent } from "./components/products/products.component";
import { AboutComponent } from "./components/about/about.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { SearchComponent } from "./components/search/search.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { CardComponent } from "./components/card/card.component";
import { TopRatedProductsComponent } from "./components/top-rated-products/top-rated-products.component";
import { BestSellersComponent } from "./components/best-sellers/best-sellers.component";
import { InfoBoardComponent } from './components/info-board/info-board.component';
import { BorderComponent } from './components/border/border.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HamburgerComponent,
    SidebarComponent,
    TestComponent,
    NavItemsComponent,
    CarouselComponent,
    Test2Component,
    GalleryComponent,
    CategoriesComponent,
    LatestProductsComponent,
    FooterComponent,
    ProductsComponent,
    AboutComponent,
    ShoppingCartComponent,
    SearchComponent,
    ProfileComponent,
    CardComponent,
    TopRatedProductsComponent,
    BestSellersComponent,
    InfoBoardComponent,
    BorderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
