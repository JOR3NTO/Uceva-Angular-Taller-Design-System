import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownGroupMolecule } from './dropdown-group.molecule';

describe('DropdownGroupMolecule', () => {
  let component: DropdownGroupMolecule;
  let fixture: ComponentFixture<DropdownGroupMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownGroupMolecule],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownGroupMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
