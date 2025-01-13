import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBarComponent } from './comments-bar.component';

describe('CommentsBarComponent', () => {
  let component: CommentsBarComponent;
  let fixture: ComponentFixture<CommentsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
