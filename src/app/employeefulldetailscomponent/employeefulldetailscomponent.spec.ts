import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeefulldetailscomponent } from './employeefulldetailscomponent';

describe('Employeefulldetailscomponent', () => {
  let component: Employeefulldetailscomponent;
  let fixture: ComponentFixture<Employeefulldetailscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeefulldetailscomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeefulldetailscomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
