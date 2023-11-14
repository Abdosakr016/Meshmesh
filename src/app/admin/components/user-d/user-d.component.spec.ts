import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDComponent } from './user-d.component';

describe('UserDComponent', () => {
  let component: UserDComponent;
  let fixture: ComponentFixture<UserDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDComponent]
    });
    fixture = TestBed.createComponent(UserDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
