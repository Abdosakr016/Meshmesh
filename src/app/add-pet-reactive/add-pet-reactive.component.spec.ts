import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPetReactiveComponent } from './add-pet-reactive.component';

describe('AddPetReactiveComponent', () => {
  let component: AddPetReactiveComponent;
  let fixture: ComponentFixture<AddPetReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPetReactiveComponent]
    });
    fixture = TestBed.createComponent(AddPetReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
