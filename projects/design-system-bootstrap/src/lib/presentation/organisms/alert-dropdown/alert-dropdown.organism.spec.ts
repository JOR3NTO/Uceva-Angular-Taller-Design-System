import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
