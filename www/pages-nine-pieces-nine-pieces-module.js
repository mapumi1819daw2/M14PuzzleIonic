(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nine-pieces-nine-pieces-module"],{

/***/ "./src/app/pages/nine-pieces/nine-pieces.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/nine-pieces/nine-pieces.module.ts ***!
  \*********************************************************/
/*! exports provided: NinePiecesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NinePiecesPageModule", function() { return NinePiecesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nine_pieces_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nine-pieces.page */ "./src/app/pages/nine-pieces/nine-pieces.page.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _nine_pieces_page__WEBPACK_IMPORTED_MODULE_6__["NinePiecesPage"]
    }
];
var NinePiecesPageModule = /** @class */ (function () {
    function NinePiecesPageModule() {
    }
    NinePiecesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nine_pieces_page__WEBPACK_IMPORTED_MODULE_6__["NinePiecesPage"]]
        })
    ], NinePiecesPageModule);
    return NinePiecesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nine-pieces/nine-pieces.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/nine-pieces/nine-pieces.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!formulary\" class=\"container\">\n  <div class=\"tablero\">\n    <ion-row text-center padding-top>\n      <ion-col size-xs=\"12\" size-sm=\"12\">\n        <div class=\"example-container\">\n          <div id=\"done1\" cdkDropList #doneList1=\"cdkDropList\" [cdkDropListData]=\"done1\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done1\" cdkDrag><img class=\"done1\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done2\" cdkDropList #doneList2=\"cdkDropList\" [cdkDropListData]=\"done2\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done2\" cdkDrag><img class=\"done2\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done3\" cdkDropList #doneList3=\"cdkDropList\" [cdkDropListData]=\"done3\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done3\" cdkDrag><img class=\"done3\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done4\" cdkDropList #doneList4=\"cdkDropList\" [cdkDropListData]=\"done4\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done4\" cdkDrag><img class=\"done4\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done5\" cdkDropList #doneList5=\"cdkDropList\" [cdkDropListData]=\"done5\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done5\" cdkDrag><img class=\"done5\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done6\" cdkDropList #doneList6=\"cdkDropList\" [cdkDropListData]=\"done6\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done6\" cdkDrag><img class=\"done6\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done7\" cdkDropList #doneList7=\"cdkDropList\" [cdkDropListData]=\"done7\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done7\" cdkDrag><img class=\"done7\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done8\" cdkDropList #doneList8=\"cdkDropList\" [cdkDropListData]=\"done8\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done8\" cdkDrag><img class=\"done8\" [src]=\"img\"></div>\n          </div>\n        </div>\n        <div class=\"example-container\">\n          <div id=\"done9\" cdkDropList #doneList9=\"cdkDropList\" [cdkDropListData]=\"done9\"\n            [cdkDropListConnectedTo]=\"[todoList]\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\"\n            [cdkDropListEnterPredicate]=\"evenPredicate\">\n            <div class=\"example-box\" *ngFor=\"let item of done9\" cdkDrag><img class=\"done9\" [src]=\"img\"></div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"selectPiece\">\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"12\">\n        <div class=\"pieces-container\">\n          <div id=\"pieces\" cdkDropList #todoList=\"cdkDropList\" [cdkDropListData]=\"todo\"\n            [cdkDropListConnectedTo]=\"[doneList1, doneList2, doneList3, doneList4, doneList5, doneList6, doneList7, doneList8, doneList9]\"\n            class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n            <div class=\"example-box\" *ngFor=\"let item of todo\" [cdkDragData]=\"item\" cdkDrag><img [class]=\"item.done\"\n                [src]=\"img\"></div>\n          </div>\n          <a>{{timeLeft}}</a>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n<div *ngIf=\"formulary\">\n<form #form=\"ngForm\"  novalidate>\n  <ion-item>\n    <ion-label>Username</ion-label>\n      <ion-input  #title id=\"title\"type=\"text\" required  ></ion-input>\n\n  </ion-item>\n\n  <button ion-button type=\"submit\" (click)=\"logForm(title)\" block>Add Todo</button>\n</form>\n</div>\n<footerBar *ngIf=\"img\" (selectedImg)=\"changeImg( $event )\" (button3)=\"muestraComponente( $event )\"></footerBar>\n<selectImg *ngIf=\"selectImg\" (selectedImg)=\"changeImg( $event )\" [ngClass]=\"selectImg\"></selectImg>\n"

/***/ }),

/***/ "./src/app/pages/nine-pieces/nine-pieces.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/nine-pieces/nine-pieces.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  background: url(https://media.istockphoto.com/vectors/children-seamless-texture-baby-theme-pattern-with-teddy-bear-and-vector-id490856844?s=2048x2048);\n  background-size: contain;\n  touch-action: pan-y;\n  overflow-y: auto; }\n\nimg {\n  width: 90vw;\n  height: 90vw;\n  max-width: none;\n  position: absolute; }\n\n.done1 {\n  top: 0; }\n\n.done2 {\n  top: 0;\n  left: -30vw; }\n\n.done3 {\n  top: 0;\n  right: 0; }\n\n.done4 {\n  left: 0; }\n\n.done5 {\n  left: -30vw; }\n\n.done6 {\n  right: 0; }\n\n.done7 {\n  bottom: 0; }\n\n.done8 {\n  bottom: 0;\n  left: -30vw; }\n\n.done9 {\n  bottom: 0;\n  right: 0; }\n\n.example-container {\n  width: 30vw;\n  height: 30vw;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  overflow: hidden; }\n\n.pieces-container {\n  width: 30vw;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  overflow: hidden; }\n\n.example-list {\n  border: solid 1px #ccc;\n  width: 30vw;\n  height: 30vw;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  position: relative; }\n\n.example-box {\n  padding: 0;\n  width: 30vw;\n  height: 30vw;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  position: relative;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZlcnJhbi9Qcm9qZWN0cy9QdXp6bGVfSW9uaWMvc3JjL2FwcC9wYWdlcy9uaW5lLXBpZWNlcy9uaW5lLXBpZWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFhO0VBQ2Isc0pBQXNKO0VBQ3RKLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBZ0I7RUFDaEIsWUFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLE1BQU0sRUFBQTs7QUFHUjtFQUNFLE1BQU07RUFDTixXQXZCUyxFQUFBOztBQTBCWDtFQUNFLE1BQU07RUFDTixRQUFRLEVBQUE7O0FBR1Y7RUFDRSxPQUFPLEVBQUE7O0FBR1Q7RUFDRSxXQXBDUyxFQUFBOztBQXVDWDtFQUNFLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFNBQVM7RUFDVCxXQWpEUyxFQUFBOztBQW9EWDtFQUNFLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBR1Y7RUFDRSxXQTFEUztFQTJEVCxZQTNEUztFQTREVCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQW5FUztFQW9FVCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBc0I7RUFDdEIsV0E1RVM7RUE2RVQsWUE3RVM7RUE4RVQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFVBQVU7RUFDVixXQXZGUztFQXdGVCxZQXhGUztFQXlGVCw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmluZS1waWVjZXMvbmluZS1waWVjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBpZWNlczogMzB2dztcblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vdmVjdG9ycy9jaGlsZHJlbi1zZWFtbGVzcy10ZXh0dXJlLWJhYnktdGhlbWUtcGF0dGVybi13aXRoLXRlZGR5LWJlYXItYW5kLXZlY3Rvci1pZDQ5MDg1Njg0ND9zPTIwNDh4MjA0OCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogJHBpZWNlcyozO1xuICAgIGhlaWdodDogJHBpZWNlcyozO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5kb25lMSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIFxuICAuZG9uZTIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtJHBpZWNlcztcbiAgfVxuICBcbiAgLmRvbmUzIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5kb25lNCB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5kb25lNSB7XG4gICAgbGVmdDogLSRwaWVjZXM7XG4gIH1cbiAgXG4gIC5kb25lNiB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgXG4gIC5kb25lNyB7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIFxuICAuZG9uZTgge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAtJHBpZWNlcztcbiAgfVxuXG4gIC5kb25lOSB7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAkcGllY2VzO1xuICAgIGhlaWdodDogJHBpZWNlcztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLnBpZWNlcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAkcGllY2VzO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuZXhhbXBsZS1saXN0IHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIHdpZHRoOiAkcGllY2VzO1xuICAgIGhlaWdodDogJHBpZWNlcztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveCB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogJHBpZWNlcztcbiAgICBoZWlnaHQ6ICRwaWVjZXM7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/nine-pieces/nine-pieces.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/nine-pieces/nine-pieces.page.ts ***!
  \*******************************************************/
/*! exports provided: NinePiecesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NinePiecesPage", function() { return NinePiecesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");





var NinePiecesPage = /** @class */ (function () {
    function NinePiecesPage(alertController, sqlite) {
        this.alertController = alertController;
        this.sqlite = sqlite;
        this.todo = [];
        this.done1 = [];
        this.done2 = [];
        this.done3 = [];
        this.done4 = [];
        this.done5 = [];
        this.done6 = [];
        this.done7 = [];
        this.done8 = [];
        this.done9 = [];
        this.img = '';
        this.selectImg = 'slide-in-bottom';
        this.timeLeft = 0;
        this.id = 0;
        this.formulary = false;
        this.db = null;
        this.tasques = [];
        this.data = { 'username': String, 'score': Number };
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
    NinePiecesPage.prototype.ngOnInit = function () {
    };
    NinePiecesPage.prototype.shuffle = function (array) {
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
    NinePiecesPage.prototype.presentAlertConfirm = function () {
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
                                            _this.formulary = true;
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
    NinePiecesPage.prototype.changeImg = function (img) {
        this.startTimer();
        this.reload();
        this.muestraComponente();
        this.img = img;
    };
    NinePiecesPage.prototype.evenPredicate = function (drag, drop) {
        if (drag.data.done === drop.id) {
            return true;
        }
        else {
            return false;
        }
    };
    NinePiecesPage.prototype.reload = function () {
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
    };
    NinePiecesPage.prototype.drop = function (event) {
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
    NinePiecesPage.prototype.muestraComponente = function () {
        if (this.selectImg === 'slide-out-bottom') {
            this.selectImg = 'slide-in-bottom';
        }
        else {
            this.selectImg = 'slide-out-bottom';
        }
    };
    NinePiecesPage.prototype.startTimer = function () {
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
    NinePiecesPage.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    NinePiecesPage.prototype.logForm = function (form) {
        console.log(form.value);
        this.saveData(form.value);
    };
    NinePiecesPage.prototype.saveData = function (data) {
        var _this = this;
        this.data.username = data;
        this.data.score = this.timeLeft;
        this.tasques.push(this.data);
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO tasques VALUES(?,?,?)', [_this.id, _this.data.username, _this.data.score])
                .then(function (res) {
                console.log(res);
            })
                .catch(function (e) {
                console.log(e);
            });
        }).catch(function (e) {
            console.log(e);
        });
        this.id++;
    };
    NinePiecesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nine-pieces',
            template: __webpack_require__(/*! ./nine-pieces.page.html */ "./src/app/pages/nine-pieces/nine-pieces.page.html"),
            styles: [__webpack_require__(/*! ./nine-pieces.page.scss */ "./src/app/pages/nine-pieces/nine-pieces.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"]])
    ], NinePiecesPage);
    return NinePiecesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nine-pieces-nine-pieces-module.js.map