import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletodoComponent } from './detalletodo.component';

describe('DetalletodoComponent', () => {
  let component: DetalletodoComponent;
  let fixture: ComponentFixture<DetalletodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalletodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
