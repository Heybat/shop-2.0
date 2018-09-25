import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { sideBarAppearence, sideBarItemAppearence } from 'src/app/components/animations/annimations';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [sideBarAppearence, sideBarItemAppearence]
})
export class SidebarComponent {

  @Input() isOpen: boolean = false;
  @Output() modalEventEmitter = new EventEmitter<boolean>();

  isDisplayBlock: boolean = false;

  constructor() {
    this.isDisplayBlock = true;
  }

  closeModal(event) {
    this.modalEventEmitter.emit(false);
  }
}
