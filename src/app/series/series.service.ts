import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISeries } from './series.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const options = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

@Injectable()
export class SeriesService {
  constructor(private http: HttpClient) {}

  getAllSeries(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/db', options)
      .pipe(catchError(this.handleError<any>('getAllSeries', {})));
  }

  saveSeries(series, type: string) {
    delete series.id;
    const option = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const url = `http://localhost:3000/${type}`;
    return this.http.post<ISeries>(url, series, option)
      .pipe(catchError(this.handleError<ISeries>('saveSeries')));
  }

  removeSeries(seriesId: string, type: string, listOfSeries: ISeries[]) {
    listOfSeries = listOfSeries.filter(serie => serie.id !== +seriesId);
    this.http.delete('http://localhost:3000/' + type + '/' + seriesId)
      .pipe(catchError(this.handleError('removeSeries'))).subscribe();
    return listOfSeries;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
