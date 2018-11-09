import { Component, OnInit } from '@angular/core';
import { SpeciesRepositoryService } from 'src/app/services/species-repository.service';
import { HttpResponse } from '@angular/common/http';
import { Character } from 'src/app/types/character.type';

@Component({
  selector: 'sl-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.scss']
})
export class NewCharacterComponent implements OnInit {
  character = {
    id: 1,
    name: 'Luke Skywalker',
    species: 'Yoda',
    gender: 'male',
    homeworld: 'Tatooine'
  };
  speciesData: string[];
  constructor(private _speciesRepository: SpeciesRepositoryService) {}
  ngOnInit() {
    return this._speciesRepository.getSpecies().then(res => {
      this.speciesData = res;
    });
  }
}
