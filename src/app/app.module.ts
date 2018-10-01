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
import { TopProductsComponent } from "./components/top-products/top-products.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RoutingModule } from "./modules/routing/routing.module";

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
    TopProductsComponent,
    FooterComponent
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
