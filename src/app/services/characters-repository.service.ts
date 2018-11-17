import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Character } from '../types/character.type';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { debounceTime } from 'rxjs/operators';
interface QueryOptions {
  _page?: number;
  _limit?: number;
  q?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharactersRepositoryService {
  constructor(private _http: HttpClient) {}

  public getCharacters(
    options?: QueryOptions
  ): Observable<HttpResponse<Character[]>> {
    return this._http.get<Character[]>(
      `${environment.backendUrl}/characters${this.prepareQueryOptions(
        options
      )}`,
      { observe: 'response' }
    );
  }
  public getCharacter(id: number | string) {
    return this._http.get<Character>(
      `${environment.backendUrl}/characters/${id}`
    );
  }
  public makeCharacter(character: Character) {
    return this._http.post(`${environment.backendUrl}/characters`, character);
  }
  public updateCharacter(character: Character) {
    return this._http.put(
      `${environment.backendUrl}/characters/${character.id}`,
      character
    );
  }
  public removeCharacter(id: number | string) {
    return this._http.delete(`${environment.backendUrl}/characters/${id}`);
  }

  private prepareQueryOptions(options?: QueryOptions): string {
    if (!options) {
      return '';
    }
    let query = `?`;
    let keys = Object.keys(options);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (options[key]) {
        if (i != 0) {
          query += `&`;
        }
        query += `${key}=${options[key]}`;
      }
    }
    return query;
  }
}
