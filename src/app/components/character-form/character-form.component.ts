import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Character } from 'src/app/types/character.type';

@Component({
  selector: 'sl-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
  @ViewChild('name') nameField: ElementRef;
  disabled: boolean;
  @Input('Species')
  set species(value) {
    if (value) {
      this.speciesData = value;
    }
  }
  @Input()
  set Character(value: Character) {
    for (let control of Object.keys(this.characterForm.controls)) {
      this.characterForm.controls[control].setValue(value[control]);
    }
  }
  @Output() Save = new EventEmitter<Character>();
  speciesData: string[];
  gendersData = [
    {
      value: 'male',
      label: 'Male'
    },
    {
      value: 'female',
      label: 'Female'
    },
    {
      value: 'n/a',
      label: 'n/a'
    }
  ];
  characterForm: FormGroup;
  constructor(_fb: FormBuilder) {
    this.characterForm = _fb.group({
      id: '',
      name: ['', Validators.required],
      species: ['', Validators.required],
      gender: ['', Validators.required],
      homeworld: ['']
    });
  }
  saveCharacter() {
    const { value, valid } = this.characterForm;
    if (valid) {
      this.disabled = true;
      this.Save.emit(value);
    } else {
      //mark all controls as Touched to show user errors
      for (let control of Object.keys(this.characterForm.controls)) {
        this.characterForm.controls[control].markAsTouched();
      }
      this.nameField.nativeElement.focus();
    }
  }
  errorCheck(formControlName: string) {
    let control = this.characterForm.get(formControlName);
    return !control.valid && control.touched;
  }
  ngOnInit() {}
}
