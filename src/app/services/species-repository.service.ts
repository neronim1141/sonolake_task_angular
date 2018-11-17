import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeciesRepositoryService {
  constructor(private _http: HttpClient) {}
  public getSpecies(): Observable<string[]> {
    return this._http
      .get<string[]>('http://localhost:3000/species')
      .pipe(debounceTime(200));
  }
}
