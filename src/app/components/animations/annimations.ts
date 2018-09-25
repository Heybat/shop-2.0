import { trigger, style, state, transition, animate, keyframes, query } from '@angular/animations';
import { animateChild } from '@angular/animations';


export let sideBarAppearence = trigger('sideBarAppearence', [
    transition(':enter', [
      style({width: '0px'}), 
      animate(300),
      query('@sideBarItemAppearence', [
        animateChild()
      ])
  ])])

  
export let sideBarItemAppearence = trigger('sideBarItemAppearence', [
  transition(':enter', [
    style({opacity: '0'}), 
    animate(400)])
])