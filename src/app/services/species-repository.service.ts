import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeciesRepositoryService {
  constructor(private _http: HttpClient) {}
  public getSpecies(): Promise<string[]> {
    return this._http
      .get<string[]>('http://localhost:3000/species')
      .toPromise();
  }
}
