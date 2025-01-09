import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedSectionComponent } from './inverted-section.component';

describe('InvertedSectionComponent', () => {
  let component: InvertedSectionComponent;
  let fixture: ComponentFixture<InvertedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvertedSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
