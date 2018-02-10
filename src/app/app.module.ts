import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { ChildAppComponent } from './child-app/child-app.component';
import { ParentAppComponent } from './parent-app/parent-app.component';
import { Routing } from './app.routes';
import { RouterModule } from '@angular/router';
import { GrandComponent } from './grand/grand.component';


@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ChildAppComponent,
    ParentAppComponent,
    GrandComponent
  ],
  imports: [
    Routing,
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
