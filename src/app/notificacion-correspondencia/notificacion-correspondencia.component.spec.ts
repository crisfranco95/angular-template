import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionCorrespondenciaComponent } from './notificacion-correspondencia.component';

describe('NotificacionCorrespondenciaComponent', () => {
  let component: NotificacionCorrespondenciaComponent;
  let fixture: ComponentFixture<NotificacionCorrespondenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionCorrespondenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionCorrespondenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
