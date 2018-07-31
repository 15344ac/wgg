import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodesEditaComponent } from './periodes-edita.component';

describe('PeriodesEditaComponent', () => {
  let component: PeriodesEditaComponent;
  let fixture: ComponentFixture<PeriodesEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodesEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodesEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
