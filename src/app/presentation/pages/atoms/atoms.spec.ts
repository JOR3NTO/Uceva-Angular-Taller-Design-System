import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atoms } from './atoms';

describe('Atoms', () => {
  let component: Atoms;
  let fixture: ComponentFixture<Atoms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atoms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atoms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
