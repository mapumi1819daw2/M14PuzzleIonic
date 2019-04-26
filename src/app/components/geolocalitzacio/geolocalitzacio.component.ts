import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NavController,  NavParams, ToastController } from '@ionic/angular';

@Component({
    selector: 'geolocalitzacio',
    templateUrl: './geolocalitzacio.component.html',
    styleUrls: ['geolocalitzacio.component.scss']
})
export class GeolocalitzacioComponent {
    longitude: any;
    latitude: any;
     geolocalitzacio: string;

    constructor(
                public geolocation: Geolocation,
              ) {

            this.obtenirLatLong();



    }

     obtenirLatLong() {
            this.geolocation.getCurrentPosition().then((res) => {
                this.geolocalitzacio = 'lat ' + res.coords.latitude + ' lang ' + res.coords.longitude;
                this.latitude = res.coords.latitude;
                this.longitude = res.coords.longitude;
                console.log(this.geolocalitzacio);

            }).catch((error) => {
                console.log('Error obtetint localització', error);
            });
        }
    }

