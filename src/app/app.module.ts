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
import { EditCharacterComponent } from './components/edit-character/edit-character.component';
import { NewCharacterComponent } from './components/new-character/new-character.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
const declarations = [
  RepeatDirective,
  AppComponent,
  ListViewComponent,
  CharacterInfoComponent,
  PaginatorComponent,
  SearchBoxComponent,
  EditCharacterComponent,
  NewCharacterComponent,
  CharacterFormComponent
];
const imports = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  ReactiveFormsModule
];
@NgModule({
  declarations,
  imports,
  exports: [...declarations, ...imports], //for test purposes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
