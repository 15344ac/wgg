import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JocDetallsComponent } from './joc-detalls.component';

describe('JocDetallsComponent', () => {
  let component: JocDetallsComponent;
  let fixture: ComponentFixture<JocDetallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JocDetallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JocDetallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
