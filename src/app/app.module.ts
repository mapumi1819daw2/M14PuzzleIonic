import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {BaseDadesService} from './services/baseDadesService.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {GeolocalitzacioComponent} from './components/geolocalitzacio/geolocalitzacio.component';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatCheckboxModule,
          ],
  providers: [
    StatusBar,
    SplashScreen,
      BaseDadesService,
      SQLite,
      Geolocation,
      AndroidPermissions,
      GeolocalitzacioComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
