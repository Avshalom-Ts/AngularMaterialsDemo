import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


const AngularMatrials = [
  MatButtonModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [],
  imports: [AngularMatrials],
  exports:[AngularMatrials]
})
export class MaterialsModule { }
