import { trigger, state, style, transition, animate, keyframes } from '@angular/core';


// export const MenuButtonAnimation = trigger('menuState', [
//     state('hide', style({ transform: 'rotate(0)' })),
//     state('show', style({ transform: 'rotate(-180deg)' })),
//     transition('hide => show', [style({transform: 'rotate(-360deg)'}), animate('350ms ease-out')]),
//     transition('show => hide', animate('350ms ease-in'))
// ]);


export const MenuButtonAnimation = trigger('rotatedState', [
    state('default', style({
        transform: 'translateX(0)',
        opacity: 1,
        position: 'absolute'
    })),
    state('hidden', style({
        transform: 'translateX(-120%)',
        opacity: 0,
        // position: 'absolute',
        display: 'none'
    })),
    // ==========
    state('default-sub', style({
        transform: 'translateX(120%)',
        opacity: 0,
        // position: 'absolute'
        display: 'none'
    })),
    state('shown', style({
        transform: 'translateX(0)',
        opacity: 1,
        position: 'absolute'
    })),
    transition('default => hidden', animate('300ms', keyframes([
        style({
            transform: 'translateX(0)',
            offset: 0,
            opacity: 1,
        }),
        style({
            transform: 'translateX(-30%)',
            offset: .3,
            opacity: .6,
        }),
        style({
            transform: 'translateX(-60%)',
            offset: .6,
            opacity: .3,
        }),
        style({
            transform: 'translateX(-120%)',
            offset: 1,
            opacity: 0,
        }),
    ]))),
    // ===========

    transition('default-sub => shown', animate('300ms', keyframes([
        style({
            transform: 'translateX(120%)',
            offset: 0,
            opacity: 0,
        }),
        style({
            transform: 'translateX(60%)',
            offset: .3,
            opacity: .3,
        }),
        style({
            transform: 'translateX(30%)',
            offset: .6,
            opacity: .6,
        }),
        style({
            transform: 'translateX(0)',
            offset: 1,
            opacity: 1,
        }),
    ]))),


    /*
        RETURN DEFAULT
    */
    transition('hidden => default', animate('300ms', keyframes([
        style({
            transform: 'translateX(-120%)',
            offset: 0,
            opacity: 0,
        }),
        style({
            transform: 'translateX(-60%)',
            offset: .3,
            opacity: .3,
        }),
        style({
            transform: 'translateX(-30%)',
            offset: .6,
            opacity: .6,
        }),
        style({
            transform: 'translateX(0)',
            offset: 1,
            opacity: 1,
        }),
    ]))),
    transition('shown => default-sub', animate('300ms', keyframes([
        style({
            transform: 'translateX(0)',
            offset: 0,
            opacity: 1,
        }),
        style({
            transform: 'translateX(30%)',
            offset: .3,
            opacity: .6,
        }),
        style({
            transform: 'translateX(60%)',
            offset: .6,
            opacity: .3,
        }),
        style({
            transform: 'translateX(120%)',
            offset: 1,
            opacity: 0,
        }),
    ])))
]);

