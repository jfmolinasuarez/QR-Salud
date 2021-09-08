import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosMedicosComponent } from './centros-medicos.component';

describe('CentrosMedicosComponent', () => {
  let component: CentrosMedicosComponent;
  let fixture: ComponentFixture<CentrosMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
