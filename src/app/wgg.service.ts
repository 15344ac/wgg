import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Joc} from './definicions/joc';
import { MessageService } from './message.service';
import { Periode } from './definicions/periode';
import { Observable } from 'rxjs/Observable';
import { DataHora } from './definicions/dataHora';
import { getUrlScheme } from '@angular/compiler';

@Injectable()
export class WggService {

  getJocs(idUser: string, filtreNom: string, periode: Periode, coincidents: boolean, inclouEscenaris: boolean, estricte: boolean)
    : Observable<Joc[]> {
    this.messageService.add('Carregat');

    let params = new HttpParams();

    if (filtreNom) {
      params = params.set('nom', filtreNom);
    }

    if (periode) {
      params = params.set('periode', periode.id.toString());
    }

      params = params
      .set('coincidents', coincidents ? '1' : '0')
      .set('incloureEscenaris', inclouEscenaris ? '1' : '0')
      .set('estricte', estricte ? '1' : '0');


    return this.httpClient.get<Joc[]>(this.getUrl(idUser) + '/Consulta Jocs/', {params: params}).pipe(
      tap(jocs => this.log(`fetched jocs`)),
      catchError(this.handleError('getJocs', [])));
  }

  getPeriodes(idUser: string, filtreNom: string, dataInici: string, dataFi: string, filtreJocs: string): Observable<Periode[]> {
    this.messageService.add('Carregat');

    let params = new HttpParams();

    if (filtreNom) {
      params = params.set('nom', filtreNom);
    }

    if (dataInici) {
      params = params.set('dataInici', dataInici.toString());
    }

    if (dataFi) {
      params = params.set('dataFi', dataFi.toString());
    }

    if (filtreJocs) {
      params = params.set('joc', filtreJocs);
    }

    return this.httpClient.get<Periode[]>(this.getUrl(idUser) + '/Consulta Periodes/', {params: params}).pipe(
      tap(jocs => this.log(`fetched periodes`)),
      catchError(this.handleError('getPeriodes', [])));
  }

  getParesPeriode(idUser: string, id: number): Observable<Periode[]> {
    console.log('Carregat');
    return this.httpClient.get<Periode[]>(this.getUrl(idUser) + '/Consulta Pare/' + id).pipe(
      tap(periodes => this.log('fetched pares')),
      catchError(this.handleError('getParesJoc', null)));
  }

  getPares(idUser: string, filtreJocs: string): Observable<Periode[]> {
    console.log('Carregat');
    this.messageService.add('Carregat');
    if (filtreJocs) {
      return this.httpClient.get<Periode[]>(this.getUrl(idUser) + '/Consulta Periodes Base/' + filtreJocs).pipe(
        tap(periodes => this.log(`fetched periodes`)),
        catchError(this.handleError('getPeriodesBase', [])));
    } else {
      return this.httpClient.get<Periode[]>(this.getUrl(idUser) + '/Consulta Periodes Base').pipe(
        tap(periodes => this.log(`fetched periodes`)),
        catchError(this.handleError('getPeriodesBase', [])));
    }
  }

  getNumeroJocs(idUser: string, id: number): Observable<number> {
    return this.httpClient.get<number>(this.getUrl(idUser) + '/Numero Jocs Periode/' + id).pipe(
      catchError(this.handleError('numeroJocs', null)));
  }

  getJoc(idUser: string, id: number): Observable<Joc> {
    return null;
  }

  getPeriode(idUser: string, id: number): Observable<Periode> {
    this.messageService.add('Carregat');
    return this.httpClient.get<Periode>(this.getUrl(idUser) + '/Consulta Periode/' + id).pipe(
      tap(periode => this.log('fetched periode')),
      catchError(this.handleError('getPeriode', null)));
  }

  getUrl(idUser: string): string {
    return 'http://localhost:15344/api/' + idUser;
  }

  constructor(private messageService: MessageService,
    private httpClient: HttpClient
  ) {
  }

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
}
