import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionEmbargoComponent } from './notificacion-embargo.component';

describe('NotificacionEmbargoComponent', () => {
  let component: NotificacionEmbargoComponent;
  let fixture: ComponentFixture<NotificacionEmbargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionEmbargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionEmbargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
