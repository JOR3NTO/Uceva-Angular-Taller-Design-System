import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_DROPDOWN_GROUP_DATA } from '../../../mocks/dropdown-group.mocks';
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

  it('should render all dropdowns from the group data', () => {
    component.dropdownGroupData = MOCK_DROPDOWN_GROUP_DATA;
    fixture.detectChanges();

    const host = fixture.debugElement.query(By.css('div[role="group"]'));
    const dropdowns = host.queryAll(By.css('dsb-dropdown-atom'));

    expect(dropdowns.length).toBe(MOCK_DROPDOWN_GROUP_DATA.length);
  });

  it('should emit select event with idDropdown and item', () => {
    component.dropdownGroupData = MOCK_DROPDOWN_GROUP_DATA;
    fixture.detectChanges();

    const spy = jest.spyOn(component.select, 'emit');

    const host = fixture.debugElement.query(By.css('div[role="group"]'));
    const firstDropdown = host.query(By.css('dsb-dropdown-atom'));

    const selectedItem = MOCK_DROPDOWN_GROUP_DATA[0].items[1];
    firstDropdown.triggerEventHandler('select', selectedItem);

    expect(spy).toHaveBeenCalledWith({
      idDropdown: MOCK_DROPDOWN_GROUP_DATA[0].idDropdown,
      item: selectedItem,
    });
  });
});
