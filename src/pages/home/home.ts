import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PropertyCreate} from "../properties/property-create/property-create";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addProperty(event) {
    this.navCtrl.push(PropertyCreate);
  }

}
