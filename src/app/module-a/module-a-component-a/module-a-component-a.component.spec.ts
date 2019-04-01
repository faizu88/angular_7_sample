import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAComponentAComponent } from './module-a-component-a.component';

describe('ModuleAComponentAComponent', () => {
  let component: ModuleAComponentAComponent;
  let fixture: ComponentFixture<ModuleAComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleAComponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
