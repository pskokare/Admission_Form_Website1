import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingprogramComponent } from './teachingprogram.component';

describe('TeachingprogramComponent', () => {
  let component: TeachingprogramComponent;
  let fixture: ComponentFixture<TeachingprogramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachingprogramComponent]
    });
    fixture = TestBed.createComponent(TeachingprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
