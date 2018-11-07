import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { RepeatDirective } from './directives/repeat.directive';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    RepeatDirective,
    AppComponent,
    ListViewComponent,
    CharacterInfoComponent,
    PaginatorComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
