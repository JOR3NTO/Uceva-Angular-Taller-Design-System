import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAtom } from './container-atom';

describe('ContainerAtom', () => {
  let component: ContainerAtom;
  let fixture: ComponentFixture<ContainerAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
