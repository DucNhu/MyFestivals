import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMiniComponent } from './navigation-mini.component';

describe('NavigationMiniComponent', () => {
  let component: NavigationMiniComponent;
  let fixture: ComponentFixture<NavigationMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
