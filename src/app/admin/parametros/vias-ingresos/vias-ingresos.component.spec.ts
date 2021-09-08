import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViasIngresosComponent } from './vias-ingresos.component';

describe('ViasIngresosComponent', () => {
  let component: ViasIngresosComponent;
  let fixture: ComponentFixture<ViasIngresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViasIngresosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViasIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
