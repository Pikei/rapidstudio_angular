import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipseMainComponent } from './eclipse-main.component';

describe('EclipseMainComponent', () => {
  let component: EclipseMainComponent;
  let fixture: ComponentFixture<EclipseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EclipseMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EclipseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
