import 'zone.js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HomeModule} from "./home/home.module";

import { AppComponent } from './app.component';
import { LayoutModule } from "./common/component/layout/layout.module";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // App Views
    HomeModule,

    // App layouts
    LayoutModule,

    // Routes
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
