import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-test-component',
  templateUrl: './second-test-component.component.html',
  styleUrls: ['./second-test-component.component.css']
})
export class SecondTestComponentComponent implements OnInit {
  max = {
    name: 'max',
    age: 33,
    job: 'Front End Developer',
    wife: 'Nataly',
    car: 'AUDI'
  }

  cars = ['kia', 'citroen', 'audi']

  // if(max.job === 'Front End Developer'){
  //   max.itman = frue
  // } else {
  //   max.itman = false
  // }

  constructor() { }

  ngOnInit() {
  }

}
