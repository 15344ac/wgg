import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeDetallsComponent } from './periode-detalls.component';

describe('PeriodeDetallsComponent', () => {
  let component: PeriodeDetallsComponent;
  let fixture: ComponentFixture<PeriodeDetallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodeDetallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodeDetallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
