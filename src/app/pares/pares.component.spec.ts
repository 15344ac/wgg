import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParesComponent } from './pares.component';

describe('ParesComponent', () => {
  let component: ParesComponent;
  let fixture: ComponentFixture<ParesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
