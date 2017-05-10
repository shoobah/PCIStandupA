import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { ExternaldataService } from './externaldata.service';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
  ],
  providers: [ExternaldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
