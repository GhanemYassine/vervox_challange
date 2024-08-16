import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonPageComponent } from './comparison-page.component';

describe('ComparisonPageComponent', () => {
  let component: ComparisonPageComponent;
  let fixture: ComponentFixture<ComparisonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparisonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to navigate back to the main page', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button[routerLink="/"]');
    expect(button).toBeTruthy();
  });
});
