import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotFestivalComponent } from './hot-festival.component';

describe('HotFestivalComponent', () => {
  let component: HotFestivalComponent;
  let fixture: ComponentFixture<HotFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
