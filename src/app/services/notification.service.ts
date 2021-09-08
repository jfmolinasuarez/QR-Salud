import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor() { }

  public mensajeSuccess(msj:string){
    this.Toast.fire({icon: "success", title: msj})
  }

  public mensajeError(msj:string){
    this.Toast.fire({icon: "error",title: msj})
  }

  public mensajeInfo(msj:string){
    this.Toast.fire(
      {icon: "info",
      title: msj,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }
      )
  }

  private Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
  
  
}