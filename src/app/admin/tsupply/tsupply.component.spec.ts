import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsupplyComponent } from './tsupply.component';

describe('TsupplyComponent', () => {
  let component: TsupplyComponent;
  let fixture: ComponentFixture<TsupplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsupplyComponent]
    });
    fixture = TestBed.createComponent(TsupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
