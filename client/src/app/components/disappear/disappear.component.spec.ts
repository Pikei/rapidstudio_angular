import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisappearComponent } from './disappear.component';

describe('DisappearComponent', () => {
  let component: DisappearComponent;
  let fixture: ComponentFixture<DisappearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisappearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisappearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
