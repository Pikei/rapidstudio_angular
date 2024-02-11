import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EclipseScreenComponent } from './eclipse-screen.component';

describe('EclipseScreenComponent', () => {
  let component: EclipseScreenComponent;
  let fixture: ComponentFixture<EclipseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EclipseScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EclipseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
