import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponentBComponent } from './shared-component-b.component';

describe('SharedComponentBComponent', () => {
  let component: SharedComponentBComponent;
  let fixture: ComponentFixture<SharedComponentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedComponentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
