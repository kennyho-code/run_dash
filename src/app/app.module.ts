import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SideNavigationComponent } from './layout/navigation/side-navigation/side-navigation.component';
import { HeaderComponent } from './layout/navigation/header/header.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import {WorkoutTableComponent } from './analytics/workout-table/workout-table.component';
import {WorkoutServices} from './core/services/workout.services';
import {GlobalServices} from './core/services/global.services';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SideNavigationComponent,
    HeaderComponent,
    AnalyticsComponent,
    WorkoutTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [
    GlobalServices,
    WorkoutServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
