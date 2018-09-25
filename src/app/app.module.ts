import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './components/app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HamburgerComponent } from './components/navigation//hamburger/hamburger.component';
import { SidebarComponent } from './components/navigation//sidebar/sidebar.component';
import { TestComponent } from './components/test/test.component';
import { NavItemsComponent } from './components/navigation//nav-items/nav-items.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HamburgerComponent,
    SidebarComponent,
    TestComponent,
    NavItemsComponent,
    CarouselComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
