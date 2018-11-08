import { Component, OnInit } from "@angular/core";
import { CharactersGetService } from "src/app/services/characters-get.service";
import { HttpResponse } from "@angular/common/http";
import { Character } from "src/app/types/character.type";

@Component({
  selector: "sl-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.scss"]
})
export class ListViewComponent implements OnInit {
  characters: Character[];
  page: number = 1;
  limit: number = 10;
  q: string = "";
  resourcesCount: number;
  constructor(private _charactersService: CharactersGetService) {}

  ngOnInit() {
    this.GetCharacters();
  }
  setPage(page: number): void {
    this.page = page;
    this.GetCharacters();
  }
  search(q: string) {
    this.q = q;
    this.GetCharacters();
  }
  private GetCharacters() {
    this._charactersService
      .getCharactersByPage({ _page: this.page, _limit: this.limit, q: this.q })
      .then(this.handleResponse);
  }
  /**
   * handle response from charactersService
   * arrow function because we don't want that 'this' refer to Promise
   */
  private handleResponse = (res: HttpResponse<Character[]>): void => {
    this.resourcesCount = parseInt(res.headers.get("x-total-count"));
    console.log(this.resourcesCount);
    this.characters = res.body;
  };
}
