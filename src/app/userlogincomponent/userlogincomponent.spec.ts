import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userlogincomponent } from './userlogincomponent';

describe('Userlogincomponent', () => {
  let component: Userlogincomponent;
  let fixture: ComponentFixture<Userlogincomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userlogincomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Userlogincomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
