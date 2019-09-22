import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAbogadoComponent } from './solicitud-abogado.component';

describe('SolicitudAbogadoComponent', () => {
  let component: SolicitudAbogadoComponent;
  let fixture: ComponentFixture<SolicitudAbogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAbogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAbogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
