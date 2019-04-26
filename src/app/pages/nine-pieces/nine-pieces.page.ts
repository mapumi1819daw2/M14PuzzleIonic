import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CdkDragDrop, CdkDropList, transferArrayItem, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { AlertController } from '@ionic/angular';
import { timer } from 'rxjs';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-nine-pieces',
  templateUrl: './nine-pieces.page.html',
  styleUrls: ['./nine-pieces.page.scss'],
})
export class NinePiecesPage implements OnInit {

  todo = [];
  done1 = [];
  done2 = [];
  done3 = [];
  done4 = [];
  done5 = [];
  done6 = [];
  done7 = [];
  done8 = [];
  done9 = [];
  img = '';
  selectImg = 'slide-in-bottom';
  timeLeft = 0;
  interval;
  id = 0;
formulary = false;
  db: SQLiteObject = null;
  tasques: any[] = [];

  data: any = {'username': String, 'score': Number};
  ngOnInit() {
  }

  constructor( public alertController: AlertController,   private sqlite: SQLite, public router: Router) {

    this.todo = [
      { value: '1', done: 'done1' },
      { value: '2', done: 'done2' },
      { value: '3', done: 'done3' },
      { value: '4', done: 'done4' },
      { value: '5', done: 'done5' },
      { value: '6', done: 'done6' },
      { value: '7', done: 'done7' },
      { value: '8', done: 'done8' },
      { value: '9', done: 'done9' }
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
    this.formulary = true;
    /*const alert = await this.alertController.create({
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

    await alert.present();*/


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
      { value: '4', done: 'done4' },
      { value: '5', done: 'done5' },
      { value: '6', done: 'done6' },
      { value: '7', done: 'done7' },
      { value: '8', done: 'done8' },
      { value: '9', done: 'done9' }
    ];
    this.todo = this.shuffle(this.todo);
    this.done1 = [];
    this.done2 = [];
    this.done3 = [];
    this.done4 = [];
    this.done5 = [];
    this.done6 = [];
    this.done7 = [];
    this.done8 = [];
    this.done9 = [];
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
    if (this.selectImg === 'slide-out-bottom') {
      this.selectImg = 'slide-in-bottom';
    } else {
      this.selectImg = 'slide-out-bottom';
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

  logForm(form) {
    console.log(form.value);
    this.saveData(form.value);
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
      this.router.navigate(["/results"]);
  }
}
