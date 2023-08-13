import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './model/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from './partials/header/header.component';
import { PartialsModule } from './partials/partials.module';
import { SurveyStoreComponent } from './survey-store/survey-store.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyStoreComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    HttpClientModule,
    PagesModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
