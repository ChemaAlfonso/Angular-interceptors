import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

  // Obtiene un HttpRequest<any>, lo trabaja ( Mediante clonado )
  // y devuelve HttpHandler<any>.handle( CloneRequest )

  // Proveer en el app.module
  // Configuración de un interceptor en el modulo
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: InterceptorService,
  //   multi: true
  // }

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  constructor() { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    console.log('Petición interceptada por interceptorService');
    // Headers
    const headers = new HttpHeaders({
      'token-usuario': 'asdasdas8976987d6as9687d9asd'
    });

    // Clonar la request
    // (Una peticion alterada no es válida)
    const reqClone = req.clone({
      headers
    });
    
    // Mediante un pipe podemos usa rx para controlar la respuesta
    return next.handle( reqClone ).pipe(
      catchError( this.controlarError )
    );
  }

  controlarError( error: HttpErrorResponse ) {
    console.warn('Error', error.message);
    return throwError( error );
  }
}
