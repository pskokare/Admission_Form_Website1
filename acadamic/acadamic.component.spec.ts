import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicComponent } from './acadamic.component';

describe('AcadamicComponent', () => {
  let component: AcadamicComponent;
  let fixture: ComponentFixture<AcadamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcadamicComponent]
    });
    fixture = TestBed.createComponent(AcadamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
