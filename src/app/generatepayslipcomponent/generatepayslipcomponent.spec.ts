import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generatepayslipcomponent } from './generatepayslipcomponent';

describe('Generatepayslipcomponent', () => {
  let component: Generatepayslipcomponent;
  let fixture: ComponentFixture<Generatepayslipcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generatepayslipcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Generatepayslipcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
