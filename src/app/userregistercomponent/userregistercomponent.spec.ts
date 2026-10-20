import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userregistercomponent } from './userregistercomponent';

describe('Userregistercomponent', () => {
  let component: Userregistercomponent;
  let fixture: ComponentFixture<Userregistercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userregistercomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Userregistercomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
