import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeLlistaComponent } from './periode-llista.component';

describe('PeriodeLlistaComponent', () => {
  let component: PeriodeLlistaComponent;
  let fixture: ComponentFixture<PeriodeLlistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodeLlistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodeLlistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
