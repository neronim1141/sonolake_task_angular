import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeciesRepositoryService } from 'src/app/services/species-repository.service';
import { CharactersRepositoryService } from 'src/app/services/characters-repository.service';
import { Character } from 'src/app/types/character.type';

@Component({
  selector: 'sl-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {
  character: Character;
  speciesData: string[];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _speciesRepository: SpeciesRepositoryService,
    private _characterRepository: CharactersRepositoryService
  ) {}
  ngOnInit() {
    this._characterRepository
      .getCharacter(this._route.snapshot.paramMap.get('id'))
      .toPromise()
      .then(character => {
        this.character = character;
      });

    this._speciesRepository
      .getSpecies()
      .toPromise()
      .then(res => {
        this.speciesData = res;
      });
  }
  public save(character: Character) {
    this._characterRepository
      .updateCharacter(character)
      .toPromise()
      .then(() => {
        this._router.navigate(['/']);
      });
  }
}
