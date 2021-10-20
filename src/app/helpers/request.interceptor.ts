import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  errorMessage : string = '';

  constructor(private _mensaje: NotificationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders({
      'token': 'asdfasfgjnasfkj'
    });
    const httpReq = request.clone({
      headers: headers,
      url: request.url.replace("http://", "https://")
    });
    
    return next.handle(httpReq).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 404:
            this.errorMessage = 'Pagina no encontrada.'
            break;
        
          default:
            break;
        }
        this._mensaje.mensajeError(this.errorMessage);
        return throwError('errorMessage');
      })
    );
  }
}
