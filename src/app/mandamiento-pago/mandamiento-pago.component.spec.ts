import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandamientoPagoComponent } from './mandamiento-pago.component';

describe('MandamientoPagoComponent', () => {
  let component: MandamientoPagoComponent;
  let fixture: ComponentFixture<MandamientoPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandamientoPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandamientoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
