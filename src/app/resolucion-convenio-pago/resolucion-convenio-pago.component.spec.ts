import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionConvenioPagoComponent } from './resolucion-convenio-pago.component';

describe('ResolucionConvenioPagoComponent', () => {
  let component: ResolucionConvenioPagoComponent;
  let fixture: ComponentFixture<ResolucionConvenioPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolucionConvenioPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolucionConvenioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
