import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Character } from '../types/character.type';
import { Observable } from 'rxjs';

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
  public getCharacters() {
    return this._http.get('http://localhost:3000/characters');
  }

  public getCharactersByPage(
    options: QueryOptions
  ): Promise<HttpResponse<Character[]>> {
    return this._http
      .get<Character[]>(
        `http://localhost:3000/characters${this.prepareQueryOptions(options)}`,
        { observe: 'response' }
      )
      .toPromise();
  }

  private prepareQueryOptions(options: QueryOptions): string {
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
