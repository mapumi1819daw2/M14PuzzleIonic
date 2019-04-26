import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule } from '@ionic/angular';

import { SelectComponent } from './selectImg/selectImg.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import {SQLite} from '@ionic-native/sqlite/ngx';
import {BaseDadesService} from '../services/baseDadesService.service';
import {GeolocalitzacioComponent} from './geolocalitzacio/geolocalitzacio.component';

@NgModule({
  declarations: [
    SelectComponent,
    FooterBarComponent,
    GeolocalitzacioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SelectComponent,

    FooterBarComponent,
    GeolocalitzacioComponent
  ],
  providers: [
    Camera,
    AndroidPermissions,
    SQLite,
    BaseDadesService
  ],
})
export class ComponentsModule { }
