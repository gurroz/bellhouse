import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyCreate } from './property-create';
import IonicStepperModule from "ionic-stepper";

@NgModule({
  declarations: [
    PropertyCreate,
  ],
  imports: [
    IonicStepperModule,
    IonicPageModule.forChild(PropertyCreate),
  ],
})
export class PropertyCreateModule {}
