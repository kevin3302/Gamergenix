import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesinfoComponent } from './gamesinfo.component';

describe('GamesinfoComponent', () => {
  let component: GamesinfoComponent;
  let fixture: ComponentFixture<GamesinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
