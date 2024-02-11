import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipseGameplayComponent } from './eclipse-gameplay.component';

describe('EclipseGameplayComponent', () => {
  let component: EclipseGameplayComponent;
  let fixture: ComponentFixture<EclipseGameplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EclipseGameplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EclipseGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
