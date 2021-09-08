import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesMedicasComponent } from './especialidades-medicas.component';

describe('EspecialidadesMedicasComponent', () => {
  let component: EspecialidadesMedicasComponent;
  let fixture: ComponentFixture<EspecialidadesMedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadesMedicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
