import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipseWeaponsComponent } from './eclipse-weapons.component';

describe('EclipseWeaponsComponent', () => {
  let component: EclipseWeaponsComponent;
  let fixture: ComponentFixture<EclipseWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EclipseWeaponsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EclipseWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
