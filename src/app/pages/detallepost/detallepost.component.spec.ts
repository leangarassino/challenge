import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepostComponent } from './detallepost.component';

describe('DetallepostComponent', () => {
  let component: DetallepostComponent;
  let fixture: ComponentFixture<DetallepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
