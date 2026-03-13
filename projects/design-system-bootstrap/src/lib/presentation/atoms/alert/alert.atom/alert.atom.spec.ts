import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
