import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBTegoEOP0_fYeSCnuHJbDRN6eZonOQmGs",
    authDomain: "armevolution-e60b8.firebaseapp.com",
    databaseURL: "https://armevolution-e60b8.firebaseio.com",
    projectId: "armevolution-e60b8",
    storageBucket: "armevolution-e60b8.appspot.com",
    messagingSenderId: "167921591548",
    appId: "1:167921591548:web:7edd5104a6e68920"
};
firebase.initializeApp(config);
@NgModule({
 declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
