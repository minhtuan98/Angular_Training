import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KtComponent } from './kt.component';

describe('KtComponent', () => {
  let component: KtComponent;
  let fixture: ComponentFixture<KtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
