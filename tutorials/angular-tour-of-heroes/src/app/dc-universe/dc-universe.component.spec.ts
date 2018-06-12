import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcUniverseComponent } from './dc-universe.component';

describe('DcUniverseComponent', () => {
  let component: DcUniverseComponent;
  let fixture: ComponentFixture<DcUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
