import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBComponentBComponent } from './module-b-component-b.component';

describe('ModuleBComponentBComponent', () => {
  let component: ModuleBComponentBComponent;
  let fixture: ComponentFixture<ModuleBComponentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleBComponentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleBComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
