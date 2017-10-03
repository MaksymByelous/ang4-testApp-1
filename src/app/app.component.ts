import { Component } from '@angular/core';
import { TepmlateServiceService } from './tepmlate-service.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('testAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.5)'
      })),
      transition('small <=> large', animate('300ms ease-out', style({
        transform: 'translateY(20px)'
      })))
    ]),
    trigger('testAnimation_2', [
      state('opac', style({
        transform: 'scale(1)'
      })),
      state('opacityty', style({
        transform: 'scale(1.5)'
      })),
      transition('small <=> large', animate('300ms ease-out', keyframes([
        style({opacity: 0, transform: 'translateY: (-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateY: (50px)', offset: 0.5}),
        style({opacity: 1, transform: 'translateY: (0)', offset: 1})
      ])))
    ])
  ]
})
export class AppComponent {
  constructor(private tepmlateServiceService:TepmlateServiceService) {

  }
  ngOnInit() {
    console.log(this.tepmlateServiceService.myPlaces())
  }
  // state: string = 'small'
  small = true
  opac = true
  get stateName() {
    return this.small ? 'small' : 'large'
  }
  get stateName2() {
    return this.opac ? 'opac' : 'opacityty'
  }
  toggleSmall() {
    this.small = !this.small;
  }
  toggleOpac() {
    this.opac = !this.opac;
  }
  myState = this.tepmlateServiceService.myState()
  places = this.tepmlateServiceService.myPlaces()

  title = 'app';

  // animateMe () {
  //   this.state = (this.state === 'small' ? 'large' : 'small')
  // }
  // animateMeToo () {
  //   this.state = (this.state === 'small' ? 'large' : 'small')
  // }

}
