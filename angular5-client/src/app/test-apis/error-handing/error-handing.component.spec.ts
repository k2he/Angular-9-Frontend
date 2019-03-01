import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandingComponent } from './error-handing.component';

describe('ErrorHandingComponent', () => {
  let component: ErrorHandingComponent;
  let fixture: ComponentFixture<ErrorHandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorHandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
