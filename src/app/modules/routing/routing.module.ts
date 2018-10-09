import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "../../components/products/products.component";
import { ProfileComponent } from "../../components/profile/profile.component";
import { SearchComponent } from "../../components/search/search.component";
import { ShoppingCartComponent } from "../../components/shopping-cart/shopping-cart.component";
import { AboutComponent } from "../../components/about/about.component";
import { SignInComponent } from "../../components/sign-in/sign-in.component";
import { TestComponent } from "../../components/test/test.component";
import { SignUpComponent } from "../../components/sign-up/sign-up.component";

const routes: Routes = [
  { path: "gallery", component: GalleryComponent },
  { path: "products", component: ProductsComponent },
  { path: "about", component: AboutComponent },
  { path: "cart", component: ShoppingCartComponent },
  { path: "profile", component: ProfileComponent },
  { path: "search", component: SearchComponent },
  { path: "login", component: SignInComponent },
  { path: "test", component: TestComponent },
  { path: "login", component: SignInComponent },
  { path: "registration", component: SignUpComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
