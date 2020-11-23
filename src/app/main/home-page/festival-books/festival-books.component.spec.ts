import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalBooksComponent } from './festival-books.component';

describe('FestivalBooksComponent', () => {
  let component: FestivalBooksComponent;
  let fixture: ComponentFixture<FestivalBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
