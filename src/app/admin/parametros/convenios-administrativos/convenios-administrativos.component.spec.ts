import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosAdministrativosComponent } from './convenios-administrativos.component';

describe('ConveniosAdministrativosComponent', () => {
  let component: ConveniosAdministrativosComponent;
  let fixture: ComponentFixture<ConveniosAdministrativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveniosAdministrativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosAdministrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
