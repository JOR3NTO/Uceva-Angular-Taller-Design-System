import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BadgeAtom } from './badge.atom';
import { MOCK_BADGE_TEXT, MOCK_BADGE_TYPES, MOCK_BADGE_TYPES_TEXT } from '../../../mocks/atoms/badge.mocks';

describe('BadgeAtom', () => {
  let component: BadgeAtom;
  let fixture: ComponentFixture<BadgeAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el component', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia agregar el text al Badge', () => {
    component.text = MOCK_BADGE_TEXT;
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toEqual(MOCK_BADGE_TEXT);
  }); 

  it('Deberia agregar el type y typeText al Badge', () => {
    MOCK_BADGE_TYPES.forEach(type => {
      MOCK_BADGE_TYPES_TEXT.forEach(typeText => {
        component.type = type;
        component.typeText = typeText;
        fixture.detectChanges();
        const span = fixture.debugElement.query(By.css('span'));
        expect(span.nativeElement.className).toContain(`bg-${type} ${typeText}`);
      });
    });
  });

  it('Deberia retorna las clases el metodo getClass()', () => {
    MOCK_BADGE_TYPES.forEach(type => {
      MOCK_BADGE_TYPES_TEXT.forEach(typeText => {
        component.type = type;
        component.typeText = typeText;
        fixture.detectChanges();
        expect(component.getClass()).toEqual(`bg-${type} ${typeText}`);
      });
    });
  });

});