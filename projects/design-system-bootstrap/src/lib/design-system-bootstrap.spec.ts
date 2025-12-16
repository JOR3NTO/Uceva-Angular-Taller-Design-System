import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemBootstrap } from './design-system-bootstrap';

describe('DesignSystemBootstrap', () => {
  let component: DesignSystemBootstrap;
  let fixture: ComponentFixture<DesignSystemBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSystemBootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSystemBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
