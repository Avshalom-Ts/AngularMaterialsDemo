import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypographyComponent} from 'src/app/typography/typography.component'
import { AppComponent } from './app.component';
import { ButtonsToggleComponent } from './buttons-toggle/buttons-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'Typography',
    component: TypographyComponent
  },
  {
    path: 'Buttons',
    component: ButtonsComponent
  },
  {
    path: 'ButtonsToggle',
    component: ButtonsToggleComponent
  },
  {
    path: 'Icons',
    component: IconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
