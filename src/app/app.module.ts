import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';


@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    AppChildComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
