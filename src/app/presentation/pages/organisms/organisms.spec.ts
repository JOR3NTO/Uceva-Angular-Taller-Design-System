import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Organisms } from './organisms';

describe('Organisms', () => {
  let component: Organisms;
  let fixture: ComponentFixture<Organisms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Organisms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Organisms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
