import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandamientoComponent } from './mandamiento.component';

describe('MandamientoComponent', () => {
  let component: MandamientoComponent;
  let fixture: ComponentFixture<MandamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
