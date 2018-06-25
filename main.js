(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar-and-sidenav-responsive></app-toolbar-and-sidenav-responsive>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_and_sidenav_responsive_toolbar_and_sidenav_responsive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component */ "./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _toolbar_and_sidenav_responsive_toolbar_and_sidenav_responsive_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarAndSidenavResponsiveComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_12__["RoutingModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container{\r\n  margin: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  <mat-chip-list>\r\n    <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n    <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n    <mat-chip color=\"warn\" selected=\"true\">Warn fish</mat-chip>\r\n  </mat-chip-list>\r\n\r\n  <p>\r\n    Gubergren commodo takimata justo justo magna et dolor cum diam hendrerit duis ut diam diam accusam ea tempor et vero ipsum possim adipiscing takimata nonumy dolore velit eos lorem sit magna nulla possim dolore et erat ut eirmod molestie vero ipsum gubergren voluptua rebum eros vero te gubergren eirmod lorem diam kasd autem feugait et esse stet sit erat tempor sadipscing dolor sadipscing justo duo sea consetetur cum ea dolor lobortis duis et elitr erat eirmod facilisis invidunt magna et diam erat ut et te gubergren invidunt aliquyam no accusam dolores labore ut amet dolore imperdiet dolores takimata sit dolore delenit sea eu hendrerit duis sed diam ex magna ex at diam et rebum zzril dolor duo diam elitr hendrerit iusto ipsum dolor sed aliquyam magna et et te consequat et accusam diam ipsum qui et justo et iusto luptatum consequat ex blandit et aliquyam invidunt rebum eum justo duo dolor sed molestie et kasd amet dolore sit clita sadipscing dolore autem sea nulla gubergren ipsum tempor et erat et sed quis eos et elitr sed veniam lorem lorem et nam sed stet sed et sed ullamcorper ipsum eirmod lorem dolor et rebum sed elitr est mazim ipsum sea tempor dolore elitr magna invidunt diam ipsum tempor accumsan erat lorem ut erat dolor voluptua suscipit dolore feugiat dolores sea molestie ea justo ut no dolore at sit sadipscing dolore tempor elit diam sit sanctus justo augue sed diam sit molestie sadipscing vel sea gubergren blandit et et no at dolore mazim at amet lorem kasd dolores sea est lorem magna vero eum elitr placerat sanctus sea luptatum sit dolore sed stet qui amet nonumy facilisis wisi sanctus consequat no sadipscing dolor invidunt duo vel no elitr magna sadipscing consetetur est ullamcorper clita eos in rebum enim est illum sed eros sed clita voluptua et justo eirmod at vulputate ullamcorper sed accumsan hendrerit amet elit labore stet accumsan et sea dolor diam suscipit sit imperdiet ipsum ut feugiat kasd at kasd sed exerci no dolore ipsum diam te vel et facilisis labore elitr sit dolores magna duo et dolore est sadipscing sadipscing congue takimata rebum elit luptatum ut autem delenit erat elitr dolor rebum augue et clita aliquyam aliquyam nonummy takimata te est no ut rebum ut sed et nulla invidunt diam et at enim duo lorem aliquyam amet amet lorem in dolor et dolor ut aliquip diam dolor ipsum justo tempor ut labore rebum eleifend eirmod dolor laoreet eleifend delenit no sit et sit magna et et magna consetetur ut hendrerit ut dolore vero ipsum enim et kasd qui consetetur sea lorem rebum kasd ipsum dolor invidunt sea duo minim id et minim invidunt sit sed stet feugait praesent aliquyam sed amet no ea amet dolor ut gubergren amet invidunt nonumy hendrerit dolor takimata est et tempor eos dolor clita ut nibh rebum rebum nulla sed dolor consetetur erat nam dolor vero erat facer dolore stet tincidunt delenit illum sit erat voluptua veniam dolore sea dolores stet sanctus ea vero est sed kasd lorem consetetur ipsum ad nonummy te lorem sed rebum dolore sed blandit magna consectetuer magna voluptua sadipscing erat dolor sanctus magna labore gubergren duo dolore tempor takimata diam ut erat est dolores sed dolor vero duis nulla rebum dolor justo magna dolores sit consetetur eirmod ipsum amet lorem aliquip aliquyam dolore consetetur eos blandit sed accusam wisi labore dolor sea ipsum facilisis consetetur et diam amet euismod dolores no ut volutpat consequat dolore iusto elitr ea volutpat et justo dolores sed dolore autem voluptua voluptua eum nisl eum tempor soluta sed in erat nonumy ea esse accumsan sit dolores eirmod eos sed kasd magna nulla at stet te quis hendrerit labore ex ea dolore et amet magna et takimata ea elitr dolore magna accumsan hendrerit vero enim elitr nisl vulputate consetetur dolores lorem magna consetetur stet gubergren quis ullamcorper dolor dolore sea dolore stet magna elitr tincidunt sit sanctus amet sanctus sit consetetur dolor amet hendrerit dolor suscipit eos iusto at et nonumy vero augue est aliquip labore velit lorem nonumy dolore magna magna ea labore lorem vulputate sadipscing labore dolore odio tempor eos nonummy sadipscing nonumy vel ut tempor praesent est in dolor voluptua enim dignissim no zzril no esse nulla at ipsum quod hendrerit velit hendrerit volutpat clita tincidunt euismod clita eos euismod ipsum amet ea kasd ut praesent et lorem dolore clita ut amet sed duis et dolor nonumy molestie labore autem tation magna ut nihil elitr et dolore clita eos quod vero in volutpat sit eos aliquyam lorem praesent amet hendrerit eleifend nulla et labore nostrud in amet hendrerit duo consequat possim sanctus sed duis duo tation eirmod tempor ut et et consetetur diam diam dolor et dolor dolore tincidunt nonumy in possim tincidunt gubergren consetetur rebum autem duo nonumy praesent sed sed duis lobortis est dolores option et sed adipiscing ad invidunt consequat kasd ullamcorper takimata magna elitr accusam et erat stet tempor amet diam lorem dolor dolor nobis eirmod stet dolore ipsum dolor sanctus elitr ipsum eirmod eos sit eros et laoreet nonumy et sed sanctus dolore adipiscing esse dolore ea magna est stet elit esse nobis dolore est lorem augue in sed aliquam dolor nonumy ipsum est enim elitr duis duo ullamcorper dolor sanctus diam dolor et blandit sadipscing rebum dolor sed est sed vel eum ipsum sed eirmod et est justo et rebum invidunt magna dolor eos justo sea sed duo wisi nonumy duis odio dolore kasd sea gubergren erat et kasd sea doming tation et sed et augue wisi dolore stet voluptua takimata lorem duo feugiat justo diam amet lorem amet consequat tempor labore eos ea at rebum kasd dolore dolore diam invidunt eos sea dolores velit kasd veniam takimata sed et exerci veniam et esse et lorem accusam lorem rebum lorem ea aliquyam dolore no accusam clita stet sanctus adipiscing dolor nisl consectetuer duis dolor diam labore elitr ex sed sea duo eirmod eros diam sit et sed tincidunt commodo dolor exerci sanctus justo justo stet accumsan\r\n  </p>\r\n\r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"{{theme}}\">\r\n  <div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n    <mat-toolbar class=\"example-toolbar\">\r\n      <div>\r\n        <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\r\n        <h1 class=\"example-app-name\">Responsive App</h1>\r\n      </div>\r\n      <div></div>\r\n      <div>\r\n        <mat-button-toggle-group name=\"theme\" aria-label=\"Theme Style\" value=\"light\">\r\n          <mat-button-toggle value=\"light\" (change)=\"changeTheme('light')\">Light</mat-button-toggle>\r\n          <mat-button-toggle value=\"dark\" (change)=\"changeTheme('dark')\">Dark</mat-button-toggle>\r\n        </mat-button-toggle-group>\r\n      </div>\r\n    </mat-toolbar>\r\n\r\n    <mat-sidenav-container class=\"example-sidenav-container\"\r\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n      <mat-sidenav #snav\r\n                   [opened]=\"mobileQuery.matches ? 'false' : 'true'\"\r\n                   [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n                   [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n        <mat-nav-list>\r\n          <a mat-list-item routerLink=\"/home\" (click)=\"mobileQuery.matches ? snav.close() : ''\">Home</a>\r\n          <a mat-list-item routerLink=\"/about\" (click)=\"mobileQuery.matches ? snav.close() : ''\">About</a>\r\n        </mat-nav-list>\r\n      </mat-sidenav>\r\n\r\n\r\n      <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\nh1.example-app-name {\n  margin-left: 8px; }\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\nmat-sidenav {\n  min-width: 150px;\n  background-color: lightgray; }\n.example-toolbar {\n  background: linear-gradient(to right, #2196f3, #1565c0);\n  display: flex;\n  justify-content: space-between; }\n.example-container div {\n  display: flex;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ToolbarAndSidenavResponsiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarAndSidenavResponsiveComponent", function() { return ToolbarAndSidenavResponsiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarAndSidenavResponsiveComponent = /** @class */ (function () {
    function ToolbarAndSidenavResponsiveComponent(changeDetectorRef, media) {
        this.theme = 'light-theme';
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ToolbarAndSidenavResponsiveComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    ToolbarAndSidenavResponsiveComponent.prototype.ngOnInit = function () {
    };
    ToolbarAndSidenavResponsiveComponent.prototype.changeTheme = function (val) {
        if (val === 'light') {
            this.theme = 'light-theme';
        }
        if (val === 'dark') {
            this.theme = 'dark-theme';
        }
    };
    ToolbarAndSidenavResponsiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar-and-sidenav-responsive',
            template: __webpack_require__(/*! ./toolbar-and-sidenav-responsive.component.html */ "./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-and-sidenav-responsive.component.scss */ "./src/app/toolbar-and-sidenav-responsive/toolbar-and-sidenav-responsive.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
    ], ToolbarAndSidenavResponsiveComponent);
    return ToolbarAndSidenavResponsiveComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\paquett\source\repos\AngularResponsiveSidenav\AngularResponsiveSidenav\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map