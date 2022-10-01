import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from 'src/app/typography/typography.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsToggleComponent } from './buttons-toggle/buttons-toggle.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';
import { ProgresSpinerComponent } from './progres-spiner/progres-spiner.component';


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
  },
  {
    path: 'Badges',
    component: BadgesComponent
  },
  {
    path: 'ProgressSpinner',
    component: ProgresSpinerComponent
  },
  {
    path: 'ProgressBar',
    component: ProgresBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
