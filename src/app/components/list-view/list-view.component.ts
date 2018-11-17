import { Component, OnInit } from '@angular/core';
import { CharactersRepositoryService } from 'src/app/services/characters-repository.service';
import { HttpResponse } from '@angular/common/http';
import { Character } from 'src/app/types/character.type';
import { Router } from '@angular/router';

@Component({
  selector: 'sl-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  characters: Character[];
  page: number = 1;
  limit: number = 10;
  q: string = '';
  resourcesCount: number;
  constructor(
    private _router: Router,
    private _charactersService: CharactersRepositoryService
  ) {}

  ngOnInit() {
    this.GetCharacters();
  }
  setPage(page: number): void {
    this.page = page;
    this.GetCharacters();
  }
  search(q: string) {
    //debounce make on search input
    this.q = q;
    this.page = 1;
    this.GetCharacters();
  }
  private GetCharacters() {
    this._charactersService
      .getCharacters({ _page: this.page, _limit: this.limit, q: this.q })
      .toPromise()
      .then(this.handleResponse);
  }
  public edit(id: number) {
    this._router.navigate(['/edit-character', id]);
  }
  public remove(id: number, index: number) {
    this._charactersService
      .removeCharacter(id)
      .toPromise()
      .then(character => {
        this.characters = this.characters.filter((val, i) => {
          return i != index;
        });
        if (this.characters.length == 0 && this.page > 1) {
          this.page--;
          this.GetCharacters();
        }
      });
  }
  /**
   * handle response from charactersService
   * arrow function because we don't want that 'this' refer to Promise
   */
  private handleResponse = (res: HttpResponse<Character[]>): void => {
    this.resourcesCount = parseInt(res.headers.get('x-total-count'));
    this.characters = res.body;
  };
}
