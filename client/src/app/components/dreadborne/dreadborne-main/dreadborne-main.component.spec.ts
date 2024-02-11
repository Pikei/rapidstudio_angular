import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadborneMainComponent } from './dreadborne-main.component';

describe('DreadborneMainComponent', () => {
  let component: DreadborneMainComponent;
  let fixture: ComponentFixture<DreadborneMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreadborneMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreadborneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
