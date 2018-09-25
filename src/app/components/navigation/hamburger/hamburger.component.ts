import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent {

  @Input() isOpen: boolean = false;
  @Output() hamburgerEventEmitter = new EventEmitter<boolean>(false);

  clicked(event){
    this.isOpen = !this.isOpen;
    this.hamburgerEventEmitter.emit(this.isOpen);
  }

}
