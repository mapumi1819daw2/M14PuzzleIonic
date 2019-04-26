(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-four-pieces-four-pieces-module"],{

/***/ "./src/app/pages/four-pieces/four-pieces.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/four-pieces/four-pieces.module.ts ***!
  \*********************************************************/
/*! exports provided: FourPiecesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourPiecesPageModule", function() { return FourPiecesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _four_pieces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./four-pieces.page */ "./src/app/pages/four-pieces/four-pieces.page.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _four_pieces_page__WEBPACK_IMPORTED_MODULE_6__["FourPiecesPage"]
    }
];
var FourPiecesPageModule = /** @class */ (function () {
    function FourPiecesPageModule() {
    }
    FourPiecesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_four_pieces_page__WEBPACK_IMPORTED_MODULE_6__["FourPiecesPage"]]
        })
    ], FourPiecesPageModule);
    return FourPiecesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/four-pieces/four-pieces.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/four-pieces/four-pieces.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container4Pieces\">\n  <div class=\"tablero\">\n    <ion-row text-center padding-top>\n      <ion-col size-xs=\"12\" size-sm=\"12\">\n        <div class=\"example-container\">\n          <div id=\"done1\" cdkDropList #doneList1=\"cdkDropList\" [cdkDropListData]=\"done1\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done1\" cdkDrag><img class=\"done1\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done2\" cdkDropList #doneList2=\"cdkDropList\" [cdkDropListData]=\"done2\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done2\" cdkDrag><img class=\"done2\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done3\" cdkDropList #doneList3=\"cdkDropList\" [cdkDropListData]=\"done3\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done3\" cdkDrag><img class=\"done3\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done4\" cdkDropList #doneList4=\"cdkDropList\" [cdkDropListData]=\"done4\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done4\" cdkDrag><img class=\"done4\" [src]=\"img\"></div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"selectPiece\">\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\">\n        <div class=\"pieces-container\">\n          <div id=\"pieces\" cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\"\n            [cdkDropListConnectedTo]=\"[doneList1, doneList2, doneList3, doneList4]\" class=\"example-list\"\n            (cdkDropListDropped)=\"drop($event)\">\n            <div class=\"example-box\" *ngFor=\"let item of todo\" [cdkDragData]=\"item\" cdkDrag><img [class]=\"item.done\"\n                [src]=\"img\"></div>\n          </div>\n          <a>{{timeLeft}}</a>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n<footerBar *ngIf=\"img\" (selectedImg)=\"changeImg( $event )\" (button3)=\"muestraComponente( $event )\"></footerBar>\n<selectImg *ngIf=\"selectImg\" (selectedImg)=\"changeImg( $event )\" [ngClass]=\"selectImg\"></selectImg>\n"

/***/ }),

/***/ "./src/app/pages/four-pieces/four-pieces.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/four-pieces/four-pieces.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container4Pieces {\n  height: 100vh;\n  background: url(https://media.istockphoto.com/vectors/children-seamless-texture-baby-theme-pattern-with-teddy-bear-and-vector-id490856844?s=2048x2048);\n  background-size: contain;\n  touch-action: pan-y;\n  overflow-y: auto; }\n\nimg {\n  width: 80vw;\n  height: 80vw;\n  max-width: none;\n  position: absolute; }\n\n.done1 {\n  top: 0; }\n\n.done2 {\n  top: 0;\n  right: 0; }\n\n.done3 {\n  bottom: 0; }\n\n.done4 {\n  bottom: 0;\n  right: 0; }\n\n.example-container {\n  width: 40vw;\n  height: 40vw;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  overflow: hidden; }\n\n.pieces-container {\n  width: 40vw;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  overflow: hidden; }\n\n.example-list {\n  border: solid 1px #ccc;\n  width: 40vw;\n  height: 40vw;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  position: relative; }\n\n.example-box {\n  padding: 0;\n  width: 40vw;\n  height: 40vw;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  position: relative;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJhbi9Qcm9qZWN0cy9QdXp6bGVfSW9uaWMvc3JjL2FwcC9wYWdlcy9mb3VyLXBpZWNlcy9mb3VyLXBpZWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFhO0VBQ2Isc0pBQXNKO0VBQ3RKLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBZ0I7RUFDaEIsWUFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLE1BQU0sRUFBQTs7QUFHUjtFQUNFLE1BQU07RUFDTixRQUFRLEVBQUE7O0FBR1Y7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUdWO0VBQ0UsV0FwQ1M7RUFxQ1QsWUFyQ1M7RUFzQ1QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0E3Q1M7RUE4Q1QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBdERTO0VBdURULFlBdkRTO0VBd0RULGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxVQUFVO0VBQ1YsV0FqRVM7RUFrRVQsWUFsRVM7RUFtRVQsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvdXItcGllY2VzL2ZvdXItcGllY2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwaWVjZXM6IDQwdnc7XG5cbi5jb250YWluZXI0UGllY2VzIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS92ZWN0b3JzL2NoaWxkcmVuLXNlYW1sZXNzLXRleHR1cmUtYmFieS10aGVtZS1wYXR0ZXJuLXdpdGgtdGVkZHktYmVhci1hbmQtdmVjdG9yLWlkNDkwODU2ODQ0P3M9MjA0OHgyMDQ4KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG4gIFxuICBpbWcge1xuICAgIHdpZHRoOiAkcGllY2VzKjI7XG4gICAgaGVpZ2h0OiAkcGllY2VzKjI7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgLmRvbmUxIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgXG4gIC5kb25lMiB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZG9uZTMge1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICBcbiAgLmRvbmU0IHtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6ICRwaWVjZXM7XG4gICAgaGVpZ2h0OiAkcGllY2VzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAucGllY2VzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6ICRwaWVjZXM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5leGFtcGxlLWxpc3Qge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgd2lkdGg6ICRwaWVjZXM7XG4gICAgaGVpZ2h0OiAkcGllY2VzO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAkcGllY2VzO1xuICAgIGhlaWdodDogJHBpZWNlcztcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/pages/four-pieces/four-pieces.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/four-pieces/four-pieces.page.ts ***!
  \*******************************************************/
/*! exports provided: FourPiecesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourPiecesPage", function() { return FourPiecesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var FourPiecesPage = /** @class */ (function () {
    function FourPiecesPage(alertController) {
        this.alertController = alertController;
        this.todo = [];
        this.done1 = [];
        this.done2 = [];
        this.done3 = [];
        this.done4 = [];
        this.img = '';
        this.selectImg = 'slide-in-bottom';
        this.footerClass = '';
        this.timeLeft = 0;
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
    FourPiecesPage.prototype.ngOnInit = function () {
    };
    FourPiecesPage.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
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
    };
    FourPiecesPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.pauseTimer();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Hecho!',
                                message: 'Has completado el puzzle',
                                buttons: [
                                    {
                                        text: '👍',
                                        handler: function () {
                                            _this.reload();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FourPiecesPage.prototype.changeImg = function (img) {
        this.startTimer();
        this.reload();
        this.muestraComponente();
        this.img = img;
    };
    FourPiecesPage.prototype.evenPredicate = function (drag, drop) {
        if (drag.data.done === drop.id) {
            return true;
        }
        else {
            return false;
        }
    };
    FourPiecesPage.prototype.reload = function () {
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
    };
    FourPiecesPage.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            event.container.disabled = true;
        }
        if (event.previousContainer.data.length === 0) {
            this.presentAlertConfirm();
        }
    };
    FourPiecesPage.prototype.muestraComponente = function () {
        console.log(1);
        if (this.selectImg === 'slide-out-bottom') {
            this.selectImg = 'slide-in-bottom';
            this.footerClass = 'slide-out-bottom';
        }
        else {
            this.selectImg = 'slide-out-bottom';
            this.footerClass = 'slide-in-bottom';
        }
    };
    FourPiecesPage.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft >= 0) {
                _this.timeLeft++;
            }
            else {
                _this.timeLeft = 0;
            }
        }, 1000);
    };
    FourPiecesPage.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    FourPiecesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-four-pieces',
            template: __webpack_require__(/*! ./four-pieces.page.html */ "./src/app/pages/four-pieces/four-pieces.page.html"),
            styles: [__webpack_require__(/*! ./four-pieces.page.scss */ "./src/app/pages/four-pieces/four-pieces.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], FourPiecesPage);
    return FourPiecesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-four-pieces-four-pieces-module.js.map