import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOutAnimation   = trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }), // initial state, off-screen to the left
      animate('500ms ease-in', style({ transform: 'translateX(0%)' })), // final state and animation duration
    ]),
    transition(':leave', [
      animate('1000ms ease-out', style({ transform: 'translateX(-100%)' })), // slide out to the left when leaving
    ]),
  ]);
