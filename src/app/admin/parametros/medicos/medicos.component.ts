import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../service/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss'],
})
export class MedicosComponent implements OnInit {
  public formulario: FormGroup;
  constructor(
    public _medicoService: MedicosService,
    public _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      utilidad_tipo_identificacion_id: ['', Validators.required],
      numero_identificacion: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      primer_nombre: ['', Validators.required],
      segundo_nombre: ['', Validators.required],
      primer_apellido: ['', Validators.required],
      segundo_apellido: ['', Validators.required],
      contacto: ['', Validators.required],
      correo: ['', Validators.required]
    });
  }
}
