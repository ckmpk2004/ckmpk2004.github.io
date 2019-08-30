(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <router-outlet></router-outlet>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/games/add/add.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/games/add/add.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n        <h1 class=\"pageName\">Adding new Game</h1>\n    </div>\n    \n    <div class=\"login\">\n        <div class= \"card\">\n        <form [formGroup]= \"addGameForm\">\n            <label>\n                <h3>Game name:</h3>\n                <input [(ngModel)]=\"newGameData.name\" name=\"name\"type =\"text\" formControlName = \"name\">\n            </label>\n            <label>\n                <h3>Description:</h3>\n                <input [(ngModel)]=\"newGameData.description\" name=\"description\"type =\"text\" formControlName = \"description\">\n            </label>\n            <label>\n                <h3>Price:</h3>\n                <input [(ngModel)]=\"newGameData.price\" name=\"price\"type =\"number\" formControlName = \"price\">\n            </label>\n        </form>\n        <button (click)=\"addGame()\" type=\"button\" class=\"btn\">Submit</button>\n        <button (click)=\"BackToPrePage()\" type=\"button\" class=\"btn2\">Cancel</button>\n    </div>\n    </div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/games/games.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/games/games.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Doggie Games Store</h1>\n<div class=\"adminBar\" *ngIf=\"data.loggedIn()\">\n    <button class =\"add\" (click)=\"toAddGamePage()\">Add new game</button>\n</div>\n<ul>\n<li *ngFor=\"let game of games\"> \n        <h3>{{game.name}} \n            <button class =\"modify\" *ngIf=\"data.loggedIn()\" \n            (click)=\"modification(game.name, game.description, game.price)\">modify</button>\n            <button class =\"delete\" *ngIf=\"data.loggedIn()\"\n            (click)=\"deleteGame(game.name)\">delete</button>\n        </h3> \n        <p>{{game.description}} </p>\n        <h5>Game Price: {{game.price}} HKD</h5>\n    </li> \n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/games/modify/modify.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/games/modify/modify.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n        <h1 class=\"pageName\">Adding new Game</h1>\n    </div>\n    \n    <div class=\"login\">\n        <div class= \"card\">\n        <form [formGroup]= \"ModifyGameForm\">\n            <label>\n                <h3>New Game name:</h3>\n                <h5>(Blank it if game title remain unchange)</h5>\n                <input [(ngModel)]=\"modifiedGameData.newName\" name=\"newName\"type =\"text\" formControlName = \"newName\">\n            </label>\n    \n            <label>\n                <h3>New Description:</h3>\n                <input [(ngModel)]=\"modifiedGameData.newDescription\" name=\"newDescription\"type =\"text\" formControlName = \"newDescription\">\n            </label>\n            <label>\n                <h3>New Price:</h3>\n                <input [(ngModel)]=\"modifiedGameData.newPrice\" name=\"newPrice\"type =\"number\" formControlName = \"newPrice\">\n            </label>\n        </form>\n        <button (click)=\"ModifyGame()\" type=\"button\" class=\"btn\">Submit</button>\n        <button (click)=\"BackToPrePage()\" type=\"button\" class=\"btn2\">Cancel</button>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body class=\"inventory-body\">\n<div></div>\n<h1>Welcome to Doggie Gaming!</h1>\n<div></div>\n<div>\n<p>This game store saling penty of wonderful games~~</p>\n</div>\n<div style=\"text-align: center\">\n<button (click)=\"toGamePage()\">Check Them out</button>\n</div>\n</body>\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n    <h1 class=\"pageName\">Login Page</h1>\n</div>\n\n<div class=\"login\">\n    <div class= \"card\">\n    <form [formGroup]= \"loginForm\">\n        <label>\n            <h3>Account(Email):</h3>\n            <input [(ngModel)]=\"loginUserData.email\" name=\"email\"type =\"text\" formControlName = \"email\">\n        </label>\n\n        <label>\n            <h3>Password:</h3>\n            <input [(ngModel)]=\"loginUserData.password\" name=\"password\"type =\"password\" formControlName = \"password\">\n        </label>\n    </form>\n    <button (click)=\"loginUser()\" type=\"button\" class=\"btn\">Login</button>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"container\">\n        <a routerLink=\"/\" class=\"logo\">{{appTitle}}</a>\n        <nav>\n            <ul>\n                <li><a routerLink=\"/\">Home</a></li>\n                <li><a routerLink=\"/games\">Games</a></li>\n                <li><a *ngIf=\"!_authService.loggedIn()\" routerLink=\"/login\">Log In</a></li>\n                <li><a *ngIf=\"_authService.loggedIn()\" (click)=\"_authService.logoutUser()\">Log Out</a></li>\n            </ul>\n        </nav>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _games_add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games/add/add.component */ "./src/app/games/add/add.component.ts");
/* harmony import */ var _games_modify_modify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/modify/modify.component */ "./src/app/games/modify/modify.component.ts");



//Components





const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'games/add', component: _games_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"] },
    { path: 'games/modify', component: _games_modify_modify_component__WEBPACK_IMPORTED_MODULE_7__["ModifyComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin: 0;\n  border: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxja21wa1xcRG9jdW1lbnRzXFxHaXRIdWJcXHdlYkFwaUFzc2lnbm1lbnRGRS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICAvL2hlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iLCJzZWN0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'webApiAssignmentFE';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _games_add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games/add/add.component */ "./src/app/games/add/add.component.ts");
/* harmony import */ var _games_modify_modify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./games/modify/modify.component */ "./src/app/games/modify/modify.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _games_games_component__WEBPACK_IMPORTED_MODULE_10__["GamesComponent"],
            _games_add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
            _games_modify_modify_component__WEBPACK_IMPORTED_MODULE_12__["ModifyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptorService"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");




let AuthGuard = class AuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate() {
        if (this._auth.loggedIn()) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DataService = class DataService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        //URLs
        this._herokuUrl = 'https://ckmwebapi.herokuapp.com';
        this._getGameUrl = this._herokuUrl + '/games';
        this._addGameUrl = this._herokuUrl + '/games/add';
        this._modifyGameUrl = this._herokuUrl + '/games/modify';
        this._delGameUrl = this._herokuUrl + '/games/delete';
        this._loginUrl = this._herokuUrl + '/login';
        //Http Headers
        this.httpOptions1 = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]() };
        this.httpOptions2 = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]() };
    }
    getGames() {
        this.httpOptions1.headers = this.httpOptions1.headers
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Credentials', 'true')
            .set('X-Requested-With', 'XMLHttpRequest');
        return this.http.get(this._getGameUrl, this.httpOptions1);
    }
    addGame(gameInformation) {
        this.httpOptions2.headers = this.httpOptions2.headers
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .set('auth-token', this.getToken())
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Credentials', 'true')
            .set('X-Requested-With', 'XMLHttpRequest');
        return this.http.put(this._addGameUrl, gameInformation, this.httpOptions2);
    }
    modifyGame(gameInformation) {
        this.httpOptions2.headers = this.httpOptions2.headers
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .set('auth-token', this.getToken())
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Credentials', 'true')
            .set('X-Requested-With', 'XMLHttpRequest');
        return this.http.post(this._modifyGameUrl, gameInformation, this.httpOptions2);
    }
    deleteGame(gameName) {
        this.httpOptions2.headers = this.httpOptions2.headers
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .set('auth-token', this.getToken())
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Credentials', 'true')
            .set('X-Requested-With', 'XMLHttpRequest');
        return this.http.delete(this._delGameUrl + "/" + gameName, this.httpOptions2);
    }
    loginUser(user) {
        this.httpOptions1.headers = this.httpOptions1.headers
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
            .set('Access-Control-Allow-Credentials', 'true')
            .set('X-Requested-With', 'XMLHttpRequest');
        return this.http.post(this._loginUrl, user, this.httpOptions1);
    }
    loggedIn() {
        return !!localStorage.getItem('auth-token');
    }
    logoutUser() {
        try {
            localStorage.removeItem('auth-token');
            window.alert('You have logged out!');
            this._router.navigate(['../']);
        }
        catch (error) {
            window.alert('Logout fail, you have not even logged in, how did you do that?');
        }
    }
    getToken() {
        return localStorage.getItem('auth-token');
    }
    //Pass game data to modify form
    readyToPassGameData(name, description, price) {
        this._nameStore = name;
        this._descriptionStore = description;
        this._priceStore = price;
    }
    //GetPassingData for modification form
    getGameData() {
        return { name: this._nameStore, description: this._descriptionStore, price: this._priceStore };
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/games/add/add.component.scss":
/*!**********************************************!*\
  !*** ./src/app/games/add/add.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.head {\n  background-color: lightgreen;\n  padding: 10px;\n}\n\nform {\n  text-align: left;\n  padding: 1em;\n  margin-bottom: 0;\n  background-color: white;\n}\n\ninput {\n  width: 20em;\n}\n\nbutton {\n  color: white;\n  display: inline-block;\n  background-color: skyblue;\n  border-radius: 12px;\n  font-size: 20px;\n  text-align: center;\n  padding: 8px 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvYWRkL0M6XFxVc2Vyc1xcY2ttcGtcXERvY3VtZW50c1xcR2l0SHViXFx3ZWJBcGlBc3NpZ25tZW50RkUvc3JjXFxhcHBcXGdhbWVzXFxhZGRcXGFkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG5cclxuZm9ybXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiZGl2LmhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5mb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMjBlbTtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/games/add/add.component.ts":
/*!********************************************!*\
  !*** ./src/app/games/add/add.component.ts ***!
  \********************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AddComponent = class AddComponent {
    constructor(_data, _router) {
        this._data = _data;
        this._router = _router;
        this.newGameData = {};
        this.addGameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    addGame() {
        console.log(this.newGameData);
        this._data.addGame(this.newGameData).subscribe(res => {
            console.log(res);
            this._router.navigate(['../games']);
            window.alert("New game added to database!");
        }, err => {
            console.log(err);
            window.alert(err.error);
        });
    }
    BackToPrePage() {
        this._router.navigate(['../games']);
    }
};
AddComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/games/add/add.component.html"),
        styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/games/add/add.component.scss")]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/games/games.component.scss":
/*!********************************************!*\
  !*** ./src/app/games/games.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n}\n\nul {\n  list-style-type: none;\n  margin-left: 2%;\n  margin-right: 2%;\n  padding: 0;\n}\n\nul li {\n  background: #eeeeee;\n  padding: 1em;\n  border-radius: 4px;\n  margin-bottom: 20px;\n  display: grid;\n}\n\nul li h3 {\n  text-align: center;\n}\n\nul li p {\n  margin-left: 20px;\n  text-align: left;\n}\n\nbutton {\n  background-color: skyblue;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  transition-duration: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvQzpcXFVzZXJzXFxja21wa1xcRG9jdW1lbnRzXFxHaXRIdWJcXHdlYkFwaUFzc2lnbm1lbnRGRS9zcmNcXGFwcFxcZ2FtZXNcXGdhbWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYW1lcy9nYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURBSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRVQ7O0FERFM7RUFDRyxrQkFBQTtBQ0daOztBRERRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0daOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVsIHsgXHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgIGgze1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcblxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuIiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIHBhZGRpbmc6IDA7XG59XG51bCBsaSB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xufVxudWwgbGkgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG51bCBsaSBwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59Il19 */"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let GamesComponent = class GamesComponent {
    constructor(data, _router) {
        this.data = data;
        this._router = _router;
        this.originGameName = "game.name";
    }
    ngOnInit() {
        this.data.getGames().subscribe(data => {
            this.games = data;
            console.log(this.games);
        });
    }
    //Route to add game page
    toAddGamePage() {
        this._router.navigate(['./games/add']);
    }
    //Route to modify page
    toModifyGamePage() {
        this._router.navigate(['./games/modify']);
    }
    //Pass original game data to modify form
    passDataToForm(name, description, price) {
        this.data.readyToPassGameData(name, description, price);
    }
    modification(name, description, price) {
        this.toModifyGamePage();
        this.passDataToForm(name, description, price);
    }
    //Delete game from database
    deleteGame(gameName) {
        console.log(gameName);
        this.data.deleteGame(gameName).subscribe(res => {
            console.log(res);
            this.refreshPage();
            window.alert("Game information deleted!");
        }, err => {
            console.log(err);
            window.alert(err.error);
        });
    }
    refreshPage() {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate(['/games']);
    }
};
GamesComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-games',
        template: __webpack_require__(/*! raw-loader!./games.component.html */ "./node_modules/raw-loader/index.js!./src/app/games/games.component.html"),
        styles: [__webpack_require__(/*! ./games.component.scss */ "./src/app/games/games.component.scss")]
    })
], GamesComponent);



/***/ }),

/***/ "./src/app/games/modify/modify.component.scss":
/*!****************************************************!*\
  !*** ./src/app/games/modify/modify.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.head {\n  background-color: lightgreen;\n  padding: 10px;\n}\n\nform {\n  text-align: left;\n  padding: 1em;\n  margin-bottom: 0;\n  background-color: white;\n}\n\ninput {\n  width: 20em;\n}\n\nbutton {\n  color: white;\n  display: inline-block;\n  background-color: skyblue;\n  border-radius: 12px;\n  font-size: 20px;\n  text-align: center;\n  padding: 8px 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvbW9kaWZ5L0M6XFxVc2Vyc1xcY2ttcGtcXERvY3VtZW50c1xcR2l0SHViXFx3ZWJBcGlBc3NpZ25tZW50RkUvc3JjXFxhcHBcXGdhbWVzXFxtb2RpZnlcXG1vZGlmeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZXMvbW9kaWZ5L21vZGlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvbW9kaWZ5L21vZGlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG5cclxuZm9ybXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDIwZW07XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAgMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiZGl2LmhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5mb3JtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMjBlbTtcbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/games/modify/modify.component.ts":
/*!**************************************************!*\
  !*** ./src/app/games/modify/modify.component.ts ***!
  \**************************************************/
/*! exports provided: ModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyComponent", function() { return ModifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ModifyComponent = class ModifyComponent {
    constructor(_data, _router) {
        this._data = _data;
        this._router = _router;
        this.modifiedGameData = {};
        this.ModifyGameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            newName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            newDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            newPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
        const passedData = this._data.getGameData();
        console.log(passedData);
        this.modifiedGameData = {
            name: passedData.name,
            newName: passedData.name,
            newDescription: passedData.description,
            newPrice: passedData.price
        };
    }
    ModifyGame() {
        console.log(this.modifiedGameData);
        this._data.modifyGame(this.modifiedGameData).subscribe(res => {
            console.log(res);
            this._router.navigate(['../games']);
            window.alert("Game informations' modification completed");
        }, err => {
            console.log(err);
            window.alert(err.error);
        });
    }
    //Back to previous page
    BackToPrePage() {
        this._router.navigate(['../games']);
    }
};
ModifyComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ModifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify',
        template: __webpack_require__(/*! raw-loader!./modify.component.html */ "./node_modules/raw-loader/index.js!./src/app/games/modify/modify.component.html"),
        styles: [__webpack_require__(/*! ./modify.component.scss */ "./src/app/games/modify/modify.component.scss")]
    })
], ModifyComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  color: White;\n}\n\ndiv {\n  height: 30px;\n}\n\np {\n  text-align: center;\n  color: White;\n}\n\nbutton {\n  background-color: gray;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  transition-duration: 0.4s;\n}\n\n.inventory-body {\n  min-width: 100%;\n  min-height: 100%;\n  position: fixed;\n  background-image: url('StarbackG.png');\n  background-color: black;\n  background-position: center;\n  background-size: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGNrbXBrXFxEb2N1bWVudHNcXEdpdEh1Ylxcd2ViQXBpQXNzaWdubWVudEZFL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IFdoaXRlO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogV2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7IFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxufVxyXG4uaW52ZW50b3J5LWJvZHl7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9pbWFnZXMvYmFja2dyb3VuZEltZy9TdGFyYmFja0cucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIFxyXG59IiwiaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBXaGl0ZTtcbn1cblxuZGl2IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogV2hpdGU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5pbnZlbnRvcnktYm9keSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9pbWFnZXMvYmFja2dyb3VuZEltZy9TdGFyYmFja0cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(data, _router) {
        this.data = data;
        this._router = _router;
    }
    ngOnInit() {
    }
    toGamePage() {
        this._router.navigate(["./games"]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.head {\n  background-color: lightgreen;\n  padding: 10px;\n}\n\nform {\n  text-align: left;\n  padding: 1em;\n  margin-bottom: 0;\n  background-color: white;\n}\n\ninput {\n  width: 20em;\n}\n\nbutton {\n  color: white;\n  display: inline-block;\n  background-color: skyblue;\n  border-radius: 12px;\n  font-size: 20px;\n  text-align: center;\n  padding: 8px 50px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxja21wa1xcRG9jdW1lbnRzXFxHaXRIdWJcXHdlYkFwaUFzc2lnbm1lbnRGRS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuaGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG5cclxuXHJcbmZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAyMGVtO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogIDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHggNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsImRpdi5oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuZm9ybSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDIwZW07XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    loginUser() {
        this._auth.loginUser(this.loginUserData).subscribe(res => {
            console.log(res);
            localStorage.setItem('auth-token', res.token);
            this._router.navigate(['./games']);
            window.alert("Login Successfully! Welcome Back!");
        }, err => {
            console.log(err);
            window.alert(err.error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: grey;\n}\nheader .logo {\n  font-weight: bold;\n}\nnav {\n  position: relative;\n  justify-self: right;\n}\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\nnav ul li {\n  float: left;\n}\nnav ul li a {\n  padding: 1.5em;\n  text-transform: uppercase;\n  font-size: 0.8em;\n}\nnav ul li a:hover {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcY2ttcGtcXERvY3VtZW50c1xcR2l0SHViXFx3ZWJBcGlBc3NpZ25tZW50RkUvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENJO0VBQ0ksaUJBQUE7QUNDUjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFBVSxVQUFBO0VBQVksU0FBQTtBQ0c5QjtBREZRO0VBQ0ksV0FBQTtBQ0laO0FESFk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0toQjtBREhnQjtFQUNJLGlCQUFBO0FDS3BCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7IFxyXG5cclxuICAgIC5sb2dve1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7cGFkZGluZzogMDsgYm9yZGVyOiAwO1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG59XG5oZWFkZXIgLmxvZ28ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xufVxubmF2IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cbm5hdiB1bCBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxubmF2IHVsIGxpIGEge1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbm5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



let NavComponent = class NavComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.appTitle = 'Doggie Gaming';
    }
    ngOnInit() {
    }
};
NavComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ckmpk\Documents\GitHub\webApiAssignmentFE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map