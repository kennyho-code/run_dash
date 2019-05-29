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
import { WorkoutTableFilterComponent } from './analytics/workout-table/workout-table-filter/workout-table-filter.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutTableSplitsComponent } from './analytics/workout-table/workout-table-splits/workout-table-splits.component'
import { DateSplits } from './core/lib/dateSplits';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SideNavigationComponent,
    HeaderComponent,
    AnalyticsComponent,
    WorkoutTableComponent,
    WorkoutTableFilterComponent,
    WorkoutTableSplitsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [
    GlobalServices,
    WorkoutServices,
    DateSplits
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
