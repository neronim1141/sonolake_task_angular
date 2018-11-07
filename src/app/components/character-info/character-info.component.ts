import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: '[sl-character-info]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent {
  @Input()
  character;
  @Output()
  Edit = new EventEmitter<number>();
  @Output()
  Remove = new EventEmitter<number>();
}
