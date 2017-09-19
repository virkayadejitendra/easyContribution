import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes'; 
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
 
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  declarations: [
    AppComponent,
    GroupDetailComponent,
    FirstComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
