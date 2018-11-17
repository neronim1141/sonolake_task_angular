import { Component, OnInit } from '@angular/core';
import { SpeciesRepositoryService } from 'src/app/services/species-repository.service';
import { HttpResponse } from '@angular/common/http';
import { Character } from 'src/app/types/character.type';
import { CharactersRepositoryService } from 'src/app/services/characters-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sl-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {

  speciesData: string[];
  constructor(
    private _router: Router,
    private _speciesRepository: SpeciesRepositoryService,
    private _characterRepository:CharactersRepositoryService) {}
  ngOnInit() {
    this._speciesRepository.getSpecies().toPromise().then(res => {
      this.speciesData = res;
    });
  }
  public save(character:Character){
    this._characterRepository.makeCharacter(character).toPromise().then(()=>{
      this._router.navigate(['/']);
    });
  }
}
