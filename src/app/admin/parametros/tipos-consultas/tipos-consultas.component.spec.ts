import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposConsultasComponent } from './tipos-consultas.component';

describe('TiposConsultasComponent', () => {
  let component: TiposConsultasComponent;
  let fixture: ComponentFixture<TiposConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposConsultasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
