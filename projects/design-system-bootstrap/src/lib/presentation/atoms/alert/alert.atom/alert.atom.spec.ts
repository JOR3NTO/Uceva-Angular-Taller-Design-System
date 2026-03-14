import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  MOCK_ALERT_TEXT,
  MOCK_ALERT_TYPE,
  MOCK_ALERT_TYPE_DEFAULT,
  MOCK_ALERT_TYPE_TEXT,
  MOCK_ALERT_TYPE_TEXT_DEFAULT,
  MOCK_ALERT_TYPES,
  MOCK_ALERT_TYPES_TEXT
} from '../../../../mocks/alert.mocks';
import { AlertAtom } from './alert.atom';

describe('AlertAtom', () => {
  let component: AlertAtom;
  let fixture: ComponentFixture<AlertAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el texto de la alerta', () => {
    component.text = MOCK_ALERT_TEXT;
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.alert'));
    expect(div.nativeElement.textContent.trim()).toBe(MOCK_ALERT_TEXT);
  });

  it('debería aplicar las clases según type y typeText', () => {
    component.type = MOCK_ALERT_TYPE;
    component.typeText = 'text-dark';
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.alert'));
    const classes = div.nativeElement.className;
    expect(classes).toContain(`alert-${MOCK_ALERT_TYPE}`);
    expect(classes).toContain(MOCK_ALERT_TYPE_TEXT);
  });

  it('getClass debería retornar las clases correctas', () => {
    component.type = MOCK_ALERT_TYPE;
    component.typeText = MOCK_ALERT_TYPE_TEXT;
    const result = component.getClass();
    expect(result).toBe(`alert-${MOCK_ALERT_TYPE} ${MOCK_ALERT_TYPE_TEXT}`);
  });

  it('debería usar valores por defecto si no se pasan inputs', () => {
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.alert'));
    const classes = div.nativeElement.className;
    expect(classes).toContain(`alert-${MOCK_ALERT_TYPE_DEFAULT}`);
    expect(classes).toContain(MOCK_ALERT_TYPE_TEXT_DEFAULT);
  });

  it('debería generar clases correctas para múltiples combinaciones', () => {
    MOCK_ALERT_TYPES.forEach((type: string) => {
      MOCK_ALERT_TYPES_TEXT.forEach((typeText: 'text-white' | 'text-dark') => {
        component.type = type as any;
        component.typeText = typeText;
        fixture.detectChanges();
        expect(component.getClass()).toBe(`alert-${type} ${typeText}`);
      });
    });
  });
});
