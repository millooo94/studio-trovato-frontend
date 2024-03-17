import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreaCardComponent } from './practice-area-card.component';

describe('PracticeAreaCardComponent', () => {
  let component: PracticeAreaCardComponent;
  let fixture: ComponentFixture<PracticeAreaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeAreaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeAreaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
