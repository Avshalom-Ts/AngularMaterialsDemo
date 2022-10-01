import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ButtonsToggleComponent } from './buttons-toggle/buttons-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgresSpinerComponent } from './progres-spiner/progres-spiner.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    NavbarComponent,
    HomeComponent,
    ButtonsToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgresSpinerComponent,
    ProgresBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
