import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { AppComponent } from "../../components/app.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "gallery", component: GalleryComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
