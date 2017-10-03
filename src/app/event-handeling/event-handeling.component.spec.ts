import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandelingComponent } from './event-handeling.component';

describe('EventHandelingComponent', () => {
  let component: EventHandelingComponent;
  let fixture: ComponentFixture<EventHandelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHandelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHandelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
