import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'sl-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output()
  Search = new EventEmitter<string>();
  searchForm = new FormControl();
  sub: Subscription;
  ngOnInit() {
    this.sub = this.searchForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe(val => this.Search.emit(val));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}