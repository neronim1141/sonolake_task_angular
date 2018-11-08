import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Character } from 'src/app/types/character.type';

@Component({
  selector: '[sl-character-info]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent {
  @Input()
  character: Character;
  @Output()
  Edit = new EventEmitter<number>();
  @Output()
  Remove = new EventEmitter<number>();
}
