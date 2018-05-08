import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaPeriodesComponent } from './llista-periodes.component';

describe('LlistaPeriodesComponent', () => {
  let component: LlistaPeriodesComponent;
  let fixture: ComponentFixture<LlistaPeriodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistaPeriodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaPeriodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
