import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDetallsComponent } from './data-detalls.component';

describe('DataDetallsComponent', () => {
  let component: DataDetallsComponent;
  let fixture: ComponentFixture<DataDetallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDetallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDetallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
