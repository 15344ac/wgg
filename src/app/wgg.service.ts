import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Joc} from './definicions/joc';
import { MessageService } from './message.service';
import { Periode } from './definicions/periode';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WggService {

  getJocs(filtreNom: string, periode: Periode,coincidents:boolean,inclouEscenaris:boolean,estricte:boolean): Observable<Joc[]>
  {
    this.messageService.add("Carregat");

    let params=new HttpParams();

    if (filtreNom)
      params=params.set('nom',filtreNom);

    if (periode)
      params=params.set('periode',periode.id.toString());

      params=params
      .set('coincidents',coincidents?"1" :"0")
      .set('incloureEscenaris',inclouEscenaris? "1":"0")
      .set('estricte',estricte? "1" :"0");


    return this.httpClient.get<Joc[]>(this.apiURL + "/Consulta Jocs/",{params: params}).pipe(
      tap(jocs => this.log(`fetched jocs`)),
      catchError(this.handleError('getJocs',[])));
  }

  getPares():Observable<Periode[]> {
    this.messageService.add("Carregat");
    return this.httpClient.get<Periode[]>(this.apiURL + "/Consulta Periodes").pipe(
      tap(jocs => this.log(`fetched periodes`)),
      catchError(this.handleError('getPeriodes',[])));
  }

  getJoc(id: number): Observable<Joc> {
    return null;
  }

  getPeriode(id: number):Observable<Periode> {
    this.messageService.add('Carregat');
    return this.httpClient.get<Periode>(this.apiURL+'/Consulta Periode/' + id).pipe(
      tap(periode => this.log('fetched periode')),
      catchError(this.handleError('getPeriode', null)));
  }

  constructor(private messageService: MessageService,
    private httpClient: HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add('JocService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return error;
    };
  }

  private apiURL = 'http://localhost:15344/api';
}
