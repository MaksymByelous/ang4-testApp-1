import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-binding',
  templateUrl: './css-binding.component.html',
  styleUrls: ['./css-binding.component.css']
})
export class CssBindingComponent  {
  headerColor = "red"
  paraghaghColor = true;
  spanStyles = {
    'background' : 'brown',
    'color' : 'yellow'
  }

}
