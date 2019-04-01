import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponentAComponent } from './shared-component-a.component';

describe('SharedComponentAComponent', () => {
  let component: SharedComponentAComponent;
  let fixture: ComponentFixture<SharedComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedComponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
