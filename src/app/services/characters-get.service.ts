import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../types/character.type';

interface QueryOptions {
  _page?: number;
  _limit?: number;
  q?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CharactersGetService {
  constructor(private http: HttpClient) {}
  public getCharacters() {
    return this.http.get('http://localhost:3000/characters');
  }
  public getCharactersByPage(options: QueryOptions) {
    return this.http
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
