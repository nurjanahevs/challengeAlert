import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { InfoComponent } from './info/info.component';
import { WarningComponent } from './warning/warning.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    InfoComponent,
    WarningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
