import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobaComponent } from './moba.component';

describe('MobaComponent', () => {
  let component: MobaComponent;
  let fixture: ComponentFixture<MobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
