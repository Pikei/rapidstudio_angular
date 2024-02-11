import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadborneScreenComponent } from './dreadborne-screen.component';

describe('DreadborneScreenComponent', () => {
  let component: DreadborneScreenComponent;
  let fixture: ComponentFixture<DreadborneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadborneScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadborneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
