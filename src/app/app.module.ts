import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';


import { UserService } from './user.service';

import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';
import { MessageService } from './message.service';
import { CircleService } from './circle.service';

import { routing } from './app.routes';

import { ServiceURL } from './service_url';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    MessageComponent,
    UserComponent
   
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [UserService, CircleService, MessageService, ServiceURL],
  bootstrap: [AppComponent]
})
export class AppModule { }
