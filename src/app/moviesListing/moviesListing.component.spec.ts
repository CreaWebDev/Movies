import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListingComponent } from './moviesListing.component';

describe('MoviesComponent', () => {
  let component: MoviesListingComponent;
  let fixture: ComponentFixture<MoviesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
