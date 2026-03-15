import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownAtom } from './dropdown.atom';
import {
  MOCK_DROPDOWN_ID,
  MOCK_DROPDOWN_LABEL,
  MOCK_DROPDOWN_ITEMS,
  MOCK_DROPDOWN_TYPE
} from '../../../mocks/dropdown.mocks';

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
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el label en el botón', () => {
    component.label = MOCK_DROPDOWN_LABEL;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button.btn'));
    expect(button.nativeElement.textContent).toContain(MOCK_DROPDOWN_LABEL);
  });

  it('debería aplicar el tipo visual al botón', () => {
    component.type = MOCK_DROPDOWN_TYPE;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button.btn'));
    expect(button.nativeElement.className).toContain(`btn-${MOCK_DROPDOWN_TYPE}`);
  });

  it('debería renderizar todas las opciones del dropdown', () => {
    component.items = MOCK_DROPDOWN_ITEMS;
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('ul.dropdown-menu li'));
    expect(items.length).toBe(MOCK_DROPDOWN_ITEMS.length);
    MOCK_DROPDOWN_ITEMS.forEach((item, idx) => {
      expect(items[idx].nativeElement.textContent).toContain(item);
    });
  });

  it('getClass debería retornar la clase correcta', () => {
    component.type = 'success';
    expect(component.getClass()).toBe('btn-success dropdown-toggle');
  });

  it('debería emitir el evento select al hacer click en una opción', () => {
    component.items = MOCK_DROPDOWN_ITEMS;
    fixture.detectChanges();
    const spy = jest.spyOn(component.select, 'emit');
    const items = fixture.debugElement.queryAll(By.css('ul.dropdown-menu button'));
    items[1].nativeElement.click();
    expect(spy).toHaveBeenCalledWith(MOCK_DROPDOWN_ITEMS[1]);
  });
});
