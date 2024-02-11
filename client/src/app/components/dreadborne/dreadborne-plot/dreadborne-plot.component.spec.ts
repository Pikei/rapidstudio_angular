import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadbornePlotComponent } from './dreadborne-plot.component';

describe('DreadbornePlotComponent', () => {
  let component: DreadbornePlotComponent;
  let fixture: ComponentFixture<DreadbornePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadbornePlotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadbornePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
