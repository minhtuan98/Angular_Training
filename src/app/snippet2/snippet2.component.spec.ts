import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Snippet2Component } from './snippet2.component';

describe('Snippet2Component', () => {
  let component: Snippet2Component;
  let fixture: ComponentFixture<Snippet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Snippet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Snippet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
