import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBlackComponent } from './menu-black.component';

describe('MenuBlackComponent', () => {
  let component: MenuBlackComponent;
  let fixture: ComponentFixture<MenuBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
