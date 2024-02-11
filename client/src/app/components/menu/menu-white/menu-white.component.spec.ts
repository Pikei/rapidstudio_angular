import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWhiteComponent } from './menu-white.component';

describe('MenuWhiteComponent', () => {
  let component: MenuWhiteComponent;
  let fixture: ComponentFixture<MenuWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
