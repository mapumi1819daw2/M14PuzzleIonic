import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BaseDadesService} from './services/baseDadesService.service';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    expenses: any;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public baseDadesService: BaseDadesService,
        public sqlite: SQLite
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.createDatabase();
        });
    }

     createDatabase() {

        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS tasques(id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, score INTEGER)', [])
                .then(res => console.log('Executed SQL'))
                .catch(e => console.log(e));


        }).catch(e => console.log(e));
    }

}
