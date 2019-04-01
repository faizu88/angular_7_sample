import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAComponentCComponent } from './module-a-component-c.component';

describe('ModuleAComponentCComponent', () => {
  let component: ModuleAComponentCComponent;
  let fixture: ComponentFixture<ModuleAComponentCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleAComponentCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAComponentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
