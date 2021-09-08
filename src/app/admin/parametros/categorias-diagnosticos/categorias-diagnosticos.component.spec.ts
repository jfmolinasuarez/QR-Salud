import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasDiagnosticosComponent } from './categorias-diagnosticos.component';

describe('CategoriasDiagnosticosComponent', () => {
  let component: CategoriasDiagnosticosComponent;
  let fixture: ComponentFixture<CategoriasDiagnosticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasDiagnosticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasDiagnosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
