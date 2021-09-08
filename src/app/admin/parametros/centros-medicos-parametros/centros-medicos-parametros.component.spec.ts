import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosMedicosParametrosComponent } from './centros-medicos-parametros.component';

describe('CentrosMedicosParametrosComponent', () => {
  let component: CentrosMedicosParametrosComponent;
  let fixture: ComponentFixture<CentrosMedicosParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosMedicosParametrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosMedicosParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
