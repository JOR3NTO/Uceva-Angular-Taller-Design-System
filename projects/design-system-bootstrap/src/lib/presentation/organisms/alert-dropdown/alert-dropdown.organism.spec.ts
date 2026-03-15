import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_ALERT_DROPDOWN_CONFIG } from '../../../mocks/alert-dropdown.mocks';
import { AlertDropdownOrganism } from './alert-dropdown.organism';

describe('AlertDropdownOrganism', () => {
  let component: AlertDropdownOrganism;
  let fixture: ComponentFixture<AlertDropdownOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertDropdownOrganism],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertDropdownOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render alerts and dropdowns when data is provided', () => {
    component.alertsGroupData = MOCK_ALERT_DROPDOWN_CONFIG.alertsGroupData;
    component.dropdownGroupData = MOCK_ALERT_DROPDOWN_CONFIG.dropdownGroupData;
    fixture.detectChanges();

    const section = fixture.debugElement.query(By.css('section'));
    expect(section).toBeTruthy();

    const alertGroup = section.query(By.css('dsb-alert-group'));
    expect(alertGroup).toBeTruthy();

    const dropdownGroup = section.query(By.css('dsb-dropdown-group-molecule'));
    expect(dropdownGroup).toBeTruthy();
  });

  it('should not render section when there is no data', () => {
    component.alertsGroupData = [];
    component.dropdownGroupData = [];
    fixture.detectChanges();

    const section = fixture.debugElement.query(By.css('section'));
    expect(section).toBeNull();
  });
});
