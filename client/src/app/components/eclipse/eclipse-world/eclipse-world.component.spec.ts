import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipseWorldComponent } from './eclipse-world.component';

describe('EclipseWorldComponent', () => {
  let component: EclipseWorldComponent;
  let fixture: ComponentFixture<EclipseWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EclipseWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EclipseWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
