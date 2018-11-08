import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "sl-character-form",
  templateUrl: "./character-form.component.html",
  styleUrls: ["./character-form.component.scss"]
})
export class CharacterFormComponent implements OnInit {
  characterForm = new FormGroup({
    name: new FormControl(),
    species: new FormControl(),
    gender: new FormControl(),
    homeworld: new FormControl()
  });
  species = ["Human", "Yoda"];
  genders = ["Male", "Female"];
  constructor() {}

  ngOnInit() {}
}
