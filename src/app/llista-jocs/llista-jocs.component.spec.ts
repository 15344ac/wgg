import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaJocsComponent } from './llista-jocs.component';

describe('LlistaJocsComponent', () => {
  let component: LlistaJocsComponent;
  let fixture: ComponentFixture<LlistaJocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlistaJocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaJocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
