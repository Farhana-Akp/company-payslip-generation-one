import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminprofilecomponent } from './adminprofilecomponent';

describe('Adminprofilecomponent', () => {
  let component: Adminprofilecomponent;
  let fixture: ComponentFixture<Adminprofilecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminprofilecomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Adminprofilecomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
