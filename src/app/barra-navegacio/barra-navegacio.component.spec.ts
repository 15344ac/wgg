import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacioComponent } from './barra-navegacio.component';

describe('BarraNavegacioComponent', () => {
  let component: BarraNavegacioComponent;
  let fixture: ComponentFixture<BarraNavegacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavegacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
