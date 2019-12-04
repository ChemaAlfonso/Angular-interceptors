import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }


  getUsers(){

    // Paso de parámetros
    let params = new HttpParams().append('page', '1');
    params = params.append('user', 'Chema');

    // Es interceptada y se le añade el token desde interceptor.service
    return this.http.get('https://reqres.in/api/users', { 
      params
     }).pipe(
       map( resp => resp['data'] )
     );
  }
}
