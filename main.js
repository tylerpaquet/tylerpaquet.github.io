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

module.exports = ".home-container {\r\n  margin: 20px;\r\n  flex: 1;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n  <mat-chip-list>\r\n    <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n    <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n    <mat-chip color=\"warn\" selected=\"true\">Warn fish</mat-chip>\r\n  </mat-chip-list>\r\n\r\n  <p>\r\n    Vero erat dolor at dolore suscipit sea velit et et magna eirmod delenit ipsum sea accusam clita sanctus dolore dolore ipsum sanctus stet eos dolore ut et est voluptua ipsum dolore ipsum esse duo at mazim ex dolores voluptua elit aliquyam tempor facilisi vero elitr dolor sed tempor ut est consetetur rebum tempor dolor tempor duo est sit elitr dolor labore invidunt enim sanctus diam aliquip duo lorem aliquip ut invidunt consetetur erat amet ex ea eos lobortis hendrerit gubergren lorem ut justo lorem et justo sanctus volutpat duis consetetur tempor et voluptua erat sit sadipscing iriure sit consequat gubergren sea congue dolore vel lorem et labore justo dignissim et tempor autem amet luptatum at lorem gubergren gubergren volutpat et nonumy vel dolor consetetur ea et justo sit invidunt ullamcorper elitr aliquyam vero aliquyam dolor sadipscing invidunt ut et accusam labore elitr sit at vero eos at gubergren iusto ipsum dolore eos amet veniam tempor sed iriure sea aliquip est aliquyam et amet ea delenit dolore nulla ea vel eos sit ipsum sed rebum eirmod aliquyam nihil duis invidunt et sea no ipsum voluptua gubergren gubergren magna nonummy elitr et ut diam congue aliquyam elitr dolor diam invidunt vero volutpat rebum gubergren eum invidunt sit autem lorem esse magna vulputate dolore amet eirmod amet dolor et duo et diam dolor quod diam et et et justo volutpat ipsum accusam molestie sed dolore illum amet gubergren ipsum illum vero feugait dolor est veniam sea invidunt in et vulputate ex labore accusam gubergren duis ad eos eos tempor eirmod invidunt tation eos magna sanctus ad dolor elitr diam lorem justo labore lorem tation consetetur consetetur sea illum erat et dignissim labore duo rebum rebum ea amet in accusam consetetur duis facilisis vero gubergren doming esse amet dolores lorem sit sanctus gubergren et dolores aliquyam ut blandit et et duo nostrud takimata amet dolores sit dolor nonumy et sit diam stet vel accusam autem amet lorem gubergren in clita sed lorem elitr esse facilisis ea id dolore aliquip vero aliquyam magna consectetuer dolores dolor lorem invidunt ut takimata nulla hendrerit sit voluptua amet sea odio in eirmod vero lorem eu accumsan lorem et amet justo duo accusam lorem invidunt takimata diam nam sit tempor dolor vero et et sed dolor et ipsum kasd aliquyam magna hendrerit voluptua tempor sea sea sanctus accumsan invidunt gubergren hendrerit magna amet accusam dolore tempor dolor lorem est dignissim aliquyam diam erat augue ipsum sadipscing at justo et dolor dolore accusam nonumy dolore rebum doming elitr quis at amet aliquam delenit lorem dignissim luptatum clita duis vel stet est amet amet lorem sea lorem sed sit nostrud erat ea dolore lorem diam labore autem wisi vero ut sea eos amet magna rebum dolore dolor et lobortis te magna vel ut delenit dolore erat takimata at lobortis aliquyam dolore et et ipsum duis tempor clita ea magna et accusam ipsum invidunt clita consequat rebum gubergren diam aliquam accusam sanctus takimata ut vel consectetuer rebum ut dolor voluptua clita eros eos kasd sit ipsum ut eos nulla nonumy dignissim illum odio invidunt amet velit et option est stet duo duo ut tempor invidunt iriure sanctus dolore commodo et suscipit gubergren sadipscing no duis stet lorem tempor nonumy no luptatum diam aliquyam aliquip duo tempor vel diam et aliquyam amet augue clita sanctus in sadipscing sed erat at eos sit blandit vel rebum ipsum gubergren sanctus eum dolor accusam placerat nonumy kasd erat aliquyam nostrud aliquam labore ipsum dolore takimata commodo magna duo molestie takimata et erat velit justo eirmod amet clita adipiscing erat et veniam amet lorem sea magna eirmod eu amet facilisi accusam stet amet gubergren at possim accusam dolor clita zzril ad eirmod voluptua commodo iriure ad et sea et labore sit et eros vel ipsum ipsum takimata invidunt amet sit duo labore no gubergren rebum suscipit et diam erat aliquyam magna sadipscing wisi justo adipiscing at assum sit et ad kasd magna iriure dolores clita tempor id dolor elit diam et lobortis sea clita duis at vero amet ut diam facilisis sadipscing sed et invidunt ipsum amet hendrerit sit magna feugiat nisl et eu nonumy tempor ut dolor dolores eros kasd ut et ipsum sed sit ut nam diam sanctus esse nonumy luptatum eos et qui ipsum ipsum consequat takimata justo dolor sit kasd dolores autem accusam no lorem vero est dolore dolore nulla erat dolor gubergren at at diam sit diam invidunt amet magna diam est sit ipsum volutpat ut lorem vel sea diam no nonumy est aliquip eirmod sed consetetur et zzril vel sadipscing diam ut et ut sea duis et et sea sit adipiscing sit erat diam possim et dolore accusam dolore amet rebum vero diam et ut tincidunt assum diam elit sanctus kasd aliquip kasd tempor sit ad magna feugait sed facer erat et amet elitr sadipscing eirmod sadipscing diam ad accusam et sit sed ipsum erat et labore amet molestie ipsum at lorem diam dolor ut magna diam sed diam et nonumy dolor elitr ut tempor elitr accumsan ipsum kasd dolore eos kasd et minim eos lorem facilisis hendrerit no ea consectetuer magna et eum ut no consetetur lorem in rebum autem dolor dolor no et magna esse sanctus dolore tempor in invidunt diam et et ea nulla consectetuer sed ut dolores eos et iriure no sea aliquyam dolore molestie kasd ipsum te diam luptatum labore aliquyam eros stet aliquyam et iriure et dolor et clita doming sed dolor et aliquip ipsum dolore lorem sanctus diam esse duo no justo at dolor accusam lorem lorem eirmod magna zzril dolor consequat at sanctus ad ipsum odio no clita erat gubergren dolore stet dolores diam nonumy invidunt rebum velit at illum velit praesent sea ad ad voluptua ut vulputate justo est labore magna aliquyam aliquam amet vel sit luptatum sed ad et dolore stet no commodo nisl no vero te justo laoreet volutpat et magna dolor lorem consectetuer velit ipsum aliquyam ipsum blandit quod dolore no ea et wisi duis ad diam wisi no\r\n  </p>\r\n</div>\r\n"

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

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\nh1.example-app-name {\n  margin-left: 8px; }\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\n  /*flex: 1 0 auto;*/\n  flex: 1; }\nmat-sidenav {\n  min-width: 150px;\n  background-color: lightgray; }\n.example-toolbar {\n  background: linear-gradient(to right, #2196f3, #1565c0);\n  display: flex;\n  justify-content: space-between; }\n.example-container div {\n  display: flex;\n  align-items: center; }\n"

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