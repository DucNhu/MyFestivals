import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFestivalsComponent } from './big-festivals.component';

describe('BigFestivalsComponent', () => {
  let component: BigFestivalsComponent;
  let fixture: ComponentFixture<BigFestivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigFestivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFestivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
