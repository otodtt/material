// import { trigger, state, style, transition, animate } from '@angular/animations';
import { trigger, state, style, transition, animate } from '@angular/core';
// import { animate } from '@angular/animations/src/animation_metadata';


// export const MenuButtonAnimation = trigger('menuState', [
//     state('hide', style({ transform: 'rotate(0)' })),
//     state('show', style({ transform: 'rotate(-180deg)' })),
//     transition('hide => show', [style({transform: 'rotate(-360deg)'}), animate('350ms ease-out')]),
//     transition('show => hide', animate('350ms ease-in'))
// ]);

export const MenuButtonAnimation = trigger('rotatedState', [
    state('default', style({
        transform: 'translateX(0)'
    })),
    state('rotated', style({
        transform: 'translateX(-100%)',
        opacity: 0,
        // display: 'none'
    })),
    transition('rotated => default', animate('400ms ease-out')),
    transition('default => rotated', animate('400ms ease-in'))
]);

