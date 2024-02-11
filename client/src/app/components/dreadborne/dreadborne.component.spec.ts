import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadborneComponent } from './dreadborne.component';

describe('DreadborneComponent', () => {
  let component: DreadborneComponent;
  let fixture: ComponentFixture<DreadborneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadborneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadborneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
