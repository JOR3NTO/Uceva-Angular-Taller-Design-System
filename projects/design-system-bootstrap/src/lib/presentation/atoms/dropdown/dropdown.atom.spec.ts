import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAtom } from './dropdown.atom';

describe('DropdownAtom', () => {
  let component: DropdownAtom;
  let fixture: ComponentFixture<DropdownAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownAtom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
