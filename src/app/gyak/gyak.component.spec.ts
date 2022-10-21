import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyakComponent } from './gyak.component';

describe('GyakComponent', () => {
  let component: GyakComponent;
  let fixture: ComponentFixture<GyakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GyakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
