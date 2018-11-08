import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewComponent } from './list-view.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CharacterInfoComponent } from '../character-info/character-info.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RepeatDirective } from 'src/app/directives/repeat.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListViewComponent,
        SearchBoxComponent,
        CharacterInfoComponent,
        PaginatorComponent,
        RepeatDirective
      ],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
