import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharacterComponent } from './edit-character.component';
import { CharacterFormComponent } from '../character-form/character-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';

describe('EditCharacterComponent', () => {
  let component: EditCharacterComponent;
  let fixture: ComponentFixture<EditCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
