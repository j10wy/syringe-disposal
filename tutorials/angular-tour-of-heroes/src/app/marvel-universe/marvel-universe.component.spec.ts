import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelUniverseComponent } from './marvel-universe.component';

describe('MarvelUniverseComponent', () => {
  let component: MarvelUniverseComponent;
  let fixture: ComponentFixture<MarvelUniverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelUniverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
