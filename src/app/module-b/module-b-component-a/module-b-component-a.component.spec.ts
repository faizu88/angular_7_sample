import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBComponentAComponent } from './module-b-component-a.component';

describe('ModuleBComponentAComponent', () => {
  let component: ModuleBComponentAComponent;
  let fixture: ComponentFixture<ModuleBComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleBComponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleBComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
