import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptors';

  constructor( private _usuariosService: UsuariosService ){
    this._usuariosService.getUsers()
        .subscribe( 
          resp => {
          console.log(resp);
          },
          err => console.log('Error en el app.component')
        );
  }
}
