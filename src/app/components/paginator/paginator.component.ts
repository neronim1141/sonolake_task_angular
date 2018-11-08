import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sl-paginator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input()
  Page = 1;
  @Input()
  Limit = 10;
  @Input()
  ResourceCount;

  @Output()
  SetPage = new EventEmitter<number>();
}
