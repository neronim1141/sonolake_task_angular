import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharacterComponent } from './new-character.component';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('NewCharacterComponent', () => {
  let component: NewCharacterComponent;
  let fixture: ComponentFixture<NewCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
