import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadborneGameComponent } from './dreadborne-game.component';

describe('DreadborneGameComponent', () => {
  let component: DreadborneGameComponent;
  let fixture: ComponentFixture<DreadborneGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadborneGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadborneGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
