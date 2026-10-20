import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userownpayslipcomponent } from './userownpayslipcomponent';

describe('Userownpayslipcomponent', () => {
  let component: Userownpayslipcomponent;
  let fixture: ComponentFixture<Userownpayslipcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userownpayslipcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Userownpayslipcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
