import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionVigenteComponent } from './resolucion-vigente.component';

describe('ResolucionVigenteComponent', () => {
  let component: ResolucionVigenteComponent;
  let fixture: ComponentFixture<ResolucionVigenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolucionVigenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolucionVigenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
