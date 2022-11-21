import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAppComponent } from './view-app/view-app.component';
import { PlaceAppComponent } from './place-app/place-app.component';
import { QueryComponent } from './query/query.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { HealthCareComponent } from './health-care/health-care.component';
import { FeedbackComponent } from './feedback/feedback.component';


const appRoutes: Routes=[
  { path: 'health-care', component:HealthCareComponent},
  { path: 'welcome', component:WelcomeComponent},
  { path: 'view-app', component:ViewAppComponent},
  { path: 'place-app', component:PlaceAppComponent},
  { path: 'query', component:QueryComponent},
  { path: 'feedback', component:FeedbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ViewAppComponent,
    PlaceAppComponent,
    QueryComponent,
    WelcomeComponent,
    HealthCareComponent,
    FeedbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
