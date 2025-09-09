import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSearches } from './recent-searches';

describe('RecentSearches', () => {
  let component: RecentSearches;
  let fixture: ComponentFixture<RecentSearches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentSearches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSearches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
