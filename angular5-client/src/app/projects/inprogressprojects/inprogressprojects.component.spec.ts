import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressprojectsComponent } from './inprogressprojects.component';

describe('InprogressprojectsComponent', () => {
  let component: InprogressprojectsComponent;
  let fixture: ComponentFixture<InprogressprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
