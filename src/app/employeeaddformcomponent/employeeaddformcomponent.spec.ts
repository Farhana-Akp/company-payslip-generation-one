import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeaddformcomponent } from './employeeaddformcomponent';

describe('Employeeaddformcomponent', () => {
  let component: Employeeaddformcomponent;
  let fixture: ComponentFixture<Employeeaddformcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeaddformcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Employeeaddformcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
