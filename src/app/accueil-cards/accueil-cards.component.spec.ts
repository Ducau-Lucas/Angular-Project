import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCardsComponent } from './accueil-cards.component';

describe('AccueilCardsComponent', () => {
  let component: AccueilCardsComponent;
  let fixture: ComponentFixture<AccueilCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccueilCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
