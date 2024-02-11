import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadborneClassesComponent } from './dreadborne-classes.component';

describe('DreadborneClassesComponent', () => {
  let component: DreadborneClassesComponent;
  let fixture: ComponentFixture<DreadborneClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadborneClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadborneClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
