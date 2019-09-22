import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivoDeterminadoComponent } from './archivo-determinado.component';

describe('ArchivoDeterminadoComponent', () => {
  let component: ArchivoDeterminadoComponent;
  let fixture: ComponentFixture<ArchivoDeterminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivoDeterminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivoDeterminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
