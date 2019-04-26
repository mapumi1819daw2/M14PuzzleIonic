import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CdkDragDrop, CdkDropList, transferArrayItem, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { AlertController } from '@ionic/angular';
import { timer } from 'rxjs';
import {SQLiteObject, SQLite} from '@ionic-native/sqlite/ngx';
import {GeolocalitzacioComponent} from '../../components/geolocalitzacio/geolocalitzacio.component';
@Component({
  selector: 'app-four-pieces',
  templateUrl: './four-pieces.page.html',
  styleUrls: ['./four-pieces.page.scss'],
})
export class FourPiecesPage implements OnInit {
  data: any = {'username': String, 'score': Number};
  todo = [];
  done1 = [];
  done2 = [];
  done3 = [];
  done4 = [];
  img = '';
  selectImg = 'slide-in-bottom';
  footerClass = '';
  timeLeft = 0;
  interval;
  tasques: any[] = [];

  id = 0;
  formulary = false;
  db: SQLiteObject = null;
  subscribeTimer: any;

  ngOnInit() {
  }

  constructor(public alertController: AlertController, private sqlite: SQLite, private geolocalitzation: GeolocalitzacioComponent, public router: Router) {
    this.todo = [
      { value: '1', done: 'done1' },
      { value: '2', done: 'done2' },
      { value: '3', done: 'done3' },
      { value: '4', done: 'done4' }
    ];
    this.todo = this.shuffle(this.todo);
    this.selectImg = 'slide-in-bottom';
    this.reload();
    this.img = '';
   }

  private shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  async presentAlertConfirm() {
    this.pauseTimer();
    this.reload();
            this.formulary = true;
    const alert = await this.alertController.create({
      header: 'Done!',
      message: 'Puzzle completed successfully',
      buttons: [
        {
          text: '👍',
          handler: () => {
            this.reload();
            this.formulary = true;
          }
        }
      ]
    });
   // await alert.present();
  }

  changeImg(img: string) {
    this.startTimer();
    this.reload();
    this.muestraComponente();
    this.img = img;
  }

  evenPredicate(drag: CdkDrag, drop: CdkDropList) {
    if (drag.data.done === drop.id) {
      return true;
    } else {
      return false;
    }
  }

  public reload(): void {
    this.todo = [
      { value: '1', done: 'done1' },
      { value: '2', done: 'done2' },
      { value: '3', done: 'done3' },
      { value: '4', done: 'done4' }
    ];
    this.todo = this.shuffle(this.todo);
    this.done1 = [];
    this.done2 = [];
    this.done3 = [];
    this.done4 = [];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      event.container.disabled = true;
    }
    if (event.previousContainer.data.length === 0) {
      this.presentAlertConfirm();
    }
  }

  muestraComponente(): void {
    console.log(1)
    if (this.selectImg === 'slide-out-bottom') {
      this.selectImg = 'slide-in-bottom';
      this.footerClass = 'slide-out-bottom';
    } else {
      this.selectImg = 'slide-out-bottom';
      this.footerClass = 'slide-in-bottom';
    }
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft >= 0) {
        this.timeLeft ++;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  saveData(data) {
    this.data.username = data;
    this.data.score = this.timeLeft;
    this.tasques.push(this.data);
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM tasques ORDER BY id DESC', [])
          .then(response => {


            this.id = response.rows.length;
            this.id ++;
            db.executeSql('INSERT INTO tasques VALUES(?,?,?)', [this.id, this.data.username, this.data.score])
                .then(res => {
                  console.log(res);

                })
                .catch(e => {
                  console.log(e);

                });

          })
          .catch(error => console.log(error));

    }).catch(e => {
      console.log(e);

    });
    console.log(this.id);
    this.timeLeft = 0;
    this.formulary = false;
  }
  logForm(form) {
    console.log(form.value);
    this.saveData(form.value);
    this.router.navigate(["/results"]);
  }}
