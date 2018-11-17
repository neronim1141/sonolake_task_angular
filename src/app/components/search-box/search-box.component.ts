import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'sl-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output()
  Search = new EventEmitter<string>();
  searchInput = new FormControl();
  sub: Subscription;
  ngOnInit() {
    // subscribe to change in search field
    this.sub = this.searchInput.valueChanges
      .pipe(
        //pass value if between key stroke is 200 ms
        debounceTime(200),
        //don't pass value if is the same as previous
        distinctUntilChanged()
      )
      .subscribe(val => {
        this.Search.emit(val);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
