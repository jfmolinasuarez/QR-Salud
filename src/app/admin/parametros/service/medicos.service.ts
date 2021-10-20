import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) { }

  listarMedicos() {
    const url = environment.URL_BASE + `/asistencial/medicos`;
    return this.http
      .get<any>(url)
  }
}
