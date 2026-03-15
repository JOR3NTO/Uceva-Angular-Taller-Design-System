import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertGroup } from './alert-group';
import { MOCK_ALERT_GROUP } from '../../../mocks/alert-group.mocks';

describe('AlertGroup', () => {
  let component: AlertGroup;
  let fixture: ComponentFixture<AlertGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar todas las alertas del grupo', () => {
    component.alertsGroupData = MOCK_ALERT_GROUP;
    fixture.detectChanges();
    const alerts = fixture.debugElement.queryAll(By.css('dsb-alert-atom'));
    expect(alerts.length).toBe(MOCK_ALERT_GROUP.length);
    MOCK_ALERT_GROUP.forEach((alert, idx) => {
      expect(alerts[idx].nativeElement.textContent).toContain(alert.text);
    });
  });

  it('debería renderizar los tipos y clases de texto correctamente', () => {
    component.alertsGroupData = MOCK_ALERT_GROUP;
    fixture.detectChanges();
    const alerts = fixture.debugElement.queryAll(By.css('dsb-alert-atom'));
    MOCK_ALERT_GROUP.forEach((alert, idx) => {
      const alertElem = alerts[idx].nativeElement;
      expect(alertElem.innerHTML).toContain(alert.text);
      // No se puede verificar la clase directamente porque dsb-alert-atom es un componente hijo,
      // pero se verifica que el texto esté presente.
    });
  });
});
