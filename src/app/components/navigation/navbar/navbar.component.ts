import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isOpen: boolean = false;

  setOpen(event){
    this.isOpen = event;
  }

  setOpenFromModal(event){
    this.isOpen = event;
  }

}
