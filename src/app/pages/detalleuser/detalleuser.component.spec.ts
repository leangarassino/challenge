import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleuserComponent } from './detalleuser.component';

describe('DetalleuserComponent', () => {
  let component: DetalleuserComponent;
  let fixture: ComponentFixture<DetalleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
