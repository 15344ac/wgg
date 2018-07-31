import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeEditaComponent } from './periode-edita.component';

describe('PeriodeEditaComponent', () => {
  let component: PeriodeEditaComponent;
  let fixture: ComponentFixture<PeriodeEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodeEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodeEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
