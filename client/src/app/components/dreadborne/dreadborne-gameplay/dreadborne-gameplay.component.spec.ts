import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadborneGameplayComponent } from './dreadborne-gameplay.component';

describe('DreadborneGameplayComponent', () => {
  let component: DreadborneGameplayComponent;
  let fixture: ComponentFixture<DreadborneGameplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadborneGameplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadborneGameplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
