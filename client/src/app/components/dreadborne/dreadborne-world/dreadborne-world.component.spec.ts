import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadborneWorldComponent } from './dreadborne-world.component';

describe('DreadborneWorldComponent', () => {
  let component: DreadborneWorldComponent;
  let fixture: ComponentFixture<DreadborneWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadborneWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadborneWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
