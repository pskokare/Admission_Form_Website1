import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinacadamyComponent } from './joinacadamy.component';

describe('JoinacadamyComponent', () => {
  let component: JoinacadamyComponent;
  let fixture: ComponentFixture<JoinacadamyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinacadamyComponent]
    });
    fixture = TestBed.createComponent(JoinacadamyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
