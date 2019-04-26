import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NavController,  } from '@ionic/angular';
import {BaseDadesService} from '../../services/baseDadesService.service';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';


@Component({
    selector: 'baseDades',
    templateUrl: './results.component.html',
    styleUrls: ['results.component.scss']
})
export class ResultsComponent {

    db: SQLiteObject = null;
    tasques: any[] = [];
    expenses: any;

    data: any = {'titol': String, 'completada': Boolean};
    constructor(
        private baseDadesService: BaseDadesService,
        public navCtrl: NavController,
                private sqlite: SQLite,
               ) {  }

    saveData() {
        // this.baseDades.recuperarTots();
        this.createDatabase();
        this.data.titol = 'Ferran';
        this.data.completada = false;
        this.data.id = 1;
        this.tasques.push(this.data);
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('INSERT INTO tasques VALUES(?,?,?)', [this.data.id, this.data.titol, this.data.completada])
                .then(res => {
                    console.log(res);

                })
                .catch(e => {
                    console.log(e);

                });
        }).catch(e => {
            console.log(e);

        });
    }

    obtenirTotesTasques() {
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then((db: SQLiteObject) => {

            db.executeSql('SELECT * FROM tasques ORDER BY score ASC', [])
                .then(response => {

                    for (let index = 0; index < response.rows.length; index++) {
                        this.tasques.push(response.rows.item(index));
                    }

                })
                .catch(error => console.log(error));
        });



    }



    ionViewDidLoad() {

    }
    createDatabase() {
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS tasques(id INTEGER PRIMARY KEY AUTOINCREMENT, titol TEXT, completada INTEGER)', [])
                .then(res => console.log('Executed SQL'))
                .catch(e => console.log(e));


        }).catch(e => console.log(e));
    }




}

