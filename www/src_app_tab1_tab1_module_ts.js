"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 78383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 72371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 94265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 72371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 40456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 78383);
/* harmony import */ var _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @project-sunbird/sunbird-video-player-v9 */ 78286);
/* harmony import */ var _question_cursor_implementation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-cursor-implementation.service.service */ 24304);
/* harmony import */ var _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @project-sunbird/sunbird-quml-player-v9 */ 28999);











let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_6__.SunbirdVideoPlayerModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        providers: [{ provide: _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_10__.QuestionCursor, useClass: _question_cursor_implementation_service_service__WEBPACK_IMPORTED_MODULE_3__.QuestionCursorImplementation }],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 72371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_santoshm_Documents_ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 32817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 28443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let Tab1Page = class Tab1Page {
    constructor() {
        this.playerConfig = {
            context: {
                mode: 'play',
                authToken: '',
                sid: '7283cf2e-d215-9944-b0c5-269489c6fa56',
                did: '3c0a3724311fe944dec5df559cc4e006',
                uid: 'anonymous',
                channel: '505c7c48ac6dc1edc9b08f21db5a571d',
                pdata: {
                    id: 'prod.diksha.portal',
                    ver: '3.2.12',
                    pid: 'sunbird-portal.contentplayer'
                },
                contextRollup: {
                    l1: '505c7c48ac6dc1edc9b08f21db5a571d'
                },
                tags: [
                    ''
                ],
                cdata: [],
                timeDiff: 0,
                objectRollup: {},
                host: '',
                endpoint: '',
                userData: {
                    firstName: 'Sourav',
                    lastName: 'Dey'
                }
            },
            config: {
                traceId: 'afhjgh',
                sideMenu: {
                    showShare: true,
                    showDownload: true,
                    showReplay: true,
                    showExit: true
                }
            },
            metadata: {
                "interceptionPoints": "{\"items\":[{\"type\":\"QuestionSet\",\"interceptionPoint\":50,\"identifier\":\"do_213272808198291456121\"},{\"type\":\"QuestionSet\",\"interceptionPoint\":90,\"identifier\":\"do_213272808198291456121\"},{\"type\":\"QuestionSet\",\"interceptionPoint\":120,\"identifier\":\"do_213272808198291456121\"}]}",
                "interceptionType": "Timestamp",
                "compatibilityLevel": 2,
                "subject": ["CPD"],
                "channel": "0125196274181898243",
                "language": ["English"],
                "mimeType": "video/mp4",
                "objectType": "Content",
                "gradeLevel": ["Others"],
                "appIcon": "https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/do_31309320735055872011111/artifact/nishtha_icon.thumb.jpg",
                "primaryCategory": "Explanation Content",
                "artifactUrl": "https://ntpproductionall.blob.core.windows.net/ntp-content-production/content/assets/do_31309320735055872011111/engagement-with-language-.mp4",
                "contentType": "ExplanationResource",
                "identifier": "do_31309320735055872011111",
                "audience": ["Student"],
                "visibility": "Default",
                "mediaType": "content",
                "osId": "org.ekstep.quiz.app",
                "languageCode": ["en"],
                "license": "CC BY-SA 4.0",
                "name": "Engagement with Language",
                "status": "Live",
                "code": "1c5bd8da-ad50-44ad-8b07-9c18ec06ce29",
                "streamingUrl": "https://ntppreprodmedia-inct.streaming.media.azure.net/409780ae-3fc2-4879-85f7-f1affcce55fa/mp4_14.ism/manifest(format=m3u8-aapl-v3)",
                "medium": ["English"],
                "createdOn": "2020-08-24T17:58:32.911+0000",
                "copyrightYear": 2020,
                "lastUpdatedOn": "2020-08-25T04:36:47.587+0000",
                "pkgVersion": 1,
                "versionKey": "1598330207587",
                "createdBy": "68dc1f8e-922b-4fcd-b663-593573c75f22",
                "resourceType": "Learn",
                "licenseDetails": {
                    "name": "CC BY-SA 4.0",
                    "url": "https://creativecommons.org/licenses/by-sa/4.0/legalcode",
                    "description": "For details see below:"
                }
            }
        };
    }
    playerEvents(event) {
    }
    playerTelemetryEvents(event) {
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab1',
        template: _Users_santoshm_Documents_ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 32817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Video player\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Video player</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div style=\"height:100vh;width:100%;\">\n    <sunbird-video-player [playerConfig]=\"playerConfig\" (playerEvent)=\"playerEvents($event)\"\n      (telemetryEvent)=\"playerTelemetryEvents($event)\"></sunbird-video-player>\n  </div>\n</ion-content>");

/***/ }),

/***/ 28443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map