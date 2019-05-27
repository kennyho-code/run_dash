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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SideNavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NavigationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
