import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {App} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PropertyCreateModule} from "../pages/properties/property-create/property-create.module";
import IonicStepperModule from "ionic-stepper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    App,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PropertyCreateModule,
    IonicStepperModule,
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
