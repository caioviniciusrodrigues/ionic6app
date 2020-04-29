import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../cadastro-usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private endPointList = 'desafio/usuario/listar';

  private endPointCadastrar = 'desafio/usuario/cadastrar';

  private endPointRemover = 'desafio/usuario/remover';

// Headers
httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  )
};

httpOptionsNoToken = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json',
    }
  )
};

  constructor(private http: HttpClient) { }

  public save(user: Usuario) {
    return this.http
      .post<Usuario>(`${environment.baseUrl}${this.endPointCadastrar}`, user, this.httpOptionsNoToken)
      .pipe(
        catchError(this.handleError)
      );
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
