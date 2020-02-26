import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { KtComponent } from './kt/kt.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { SnippetComponent } from './snippet/snippet.component';
import { Snippet2Component} from './snippet2/snippet2.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';  
import { ChaComponent} from './cha.component';
import { ContraiComponent} from './Contrai.component';
import { BaitapComponent } from './baitap/baitap.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    KtComponent,
    NgForComponent,
    SnippetComponent,
    Snippet2Component,
    PersonComponent,
    ListPersonComponent,
    ChaComponent,
    ContraiComponent,
    BaitapComponent,
    Baitap2Component,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
