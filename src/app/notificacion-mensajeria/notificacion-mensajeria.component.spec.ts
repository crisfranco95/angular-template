import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionMensajeriaComponent } from './notificacion-mensajeria.component';

describe('NotificacionMensajeriaComponent', () => {
  let component: NotificacionMensajeriaComponent;
  let fixture: ComponentFixture<NotificacionMensajeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionMensajeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionMensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
