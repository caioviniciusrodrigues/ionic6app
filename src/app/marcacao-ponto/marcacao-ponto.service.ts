import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Ponto } from './ponto';

@Injectable({
  providedIn: 'root'
})
export class MarcacaoPontoService {

  private endPointRegistrarPonto = 'desafio/ponto/manter';

  constructor(private http: HttpClient) { }

  // Headers
httpOptions = {
  headers: new HttpHeaders(
    { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  )
};


  public registrarPonto(ponto: Ponto) {
    return this.http
      .post<Ponto>(`${environment.baseUrl}${this.endPointRegistrarPonto}`, ponto, this.httpOptions)
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
