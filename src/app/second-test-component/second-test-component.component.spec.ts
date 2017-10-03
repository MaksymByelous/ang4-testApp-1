import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTestComponentComponent } from './second-test-component.component';

describe('SecondTestComponentComponent', () => {
  let component: SecondTestComponentComponent;
  let fixture: ComponentFixture<SecondTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
