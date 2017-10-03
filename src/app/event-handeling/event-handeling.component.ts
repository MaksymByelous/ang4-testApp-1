import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handeling',
  templateUrl: './event-handeling.component.html',
  styleUrls: ['./event-handeling.component.css']
})
export class EventHandelingComponent {
  clickEvent(event) {
    console.log(event)
  }
  mouseEnterEvent(event) {
    alert(event)
  }

}
