import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAComponentBComponent } from './module-a-component-b.component';

describe('ModuleAComponentBComponent', () => {
  let component: ModuleAComponentBComponent;
  let fixture: ComponentFixture<ModuleAComponentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleAComponentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
