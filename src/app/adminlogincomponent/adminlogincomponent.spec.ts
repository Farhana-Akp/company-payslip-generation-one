import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminlogincomponent } from './adminlogincomponent';

describe('Adminlogincomponent', () => {
  let component: Adminlogincomponent;
  let fixture: ComponentFixture<Adminlogincomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminlogincomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Adminlogincomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
