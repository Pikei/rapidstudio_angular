import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidTeamComponent } from './rapid-team.component';

describe('RapidTeamComponent', () => {
  let component: RapidTeamComponent;
  let fixture: ComponentFixture<RapidTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapidTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RapidTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
