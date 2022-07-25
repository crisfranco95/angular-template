import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExternalRegisterComponent } from './external-register.component';

describe('ExternalRegisterComponent', () => {
  let component: ExternalRegisterComponent;
  let fixture: ComponentFixture<ExternalRegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
