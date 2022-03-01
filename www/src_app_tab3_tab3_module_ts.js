"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 98058:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 12308);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 67586:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 12308);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 40456);
/* harmony import */ var _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @project-sunbird/sunbird-epub-player-v9 */ 87301);
/* harmony import */ var _tab1_question_cursor_implementation_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab1/question-cursor-implementation.service.service */ 24304);
/* harmony import */ var _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @project-sunbird/sunbird-quml-player-v9 */ 28999);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3-routing.module */ 98058);












let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_6__.SunbirdEpubPlayerModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab3PageRoutingModule,
        ],
        providers: [{ provide: _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_11__.QuestionCursor, useClass: _tab1_question_cursor_implementation_service_service__WEBPACK_IMPORTED_MODULE_2__.QuestionCursorImplementation }],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 12308:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_santoshm_Documents_ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 38752);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 44170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let Tab3Page = class Tab3Page {
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
                    id: 'sunbird.portal',
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
                traceId: '123456',
                sideMenu: {
                    showShare: true,
                    showDownload: true,
                    showReplay: false,
                    showExit: false,
                }
            },
            metadata: {
                compatibilityLevel: 4,
                copyright: 'Kendriya_Vidyalaya,2020',
                keywords: ['epub'],
                subject: ['Science'],
                language: ['English'],
                mimeType: 'application/epub',
                objectType: 'Content',
                gradeLevel: ['Class 10'],
                appIcon: 'https://preprodall.blob.core.windows.net/ntp-content-preprod/content/do_2130944360583331841866/artifact/book.jpg',
                primaryCategory: 'Course Assessment',
                // tslint:disable-next-line:max-line-length
                artifactUrl: 'https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/assets/do_2132118800055091201207/kehs102.epub',
                contentType: 'SelfAssess',
                identifier: 'do_21312960731822489612047',
                audience: ['Student'],
                visibility: 'Default',
                mediaType: 'content',
                osId: 'org.ekstep.quiz.app',
                languageCode: ['en'],
                license: 'CC BY 4.0',
                name: 'EPUB_229.epub',
                attributions: ['kanmani'],
                status: 'Live',
                code: '49f3ea6d-db45-a4a7-fcd6-daf58785c7db',
                description: 'epub',
                // tslint:disable-next-line:max-line-length
                streamingUrl: 'https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21312960731822489612047/artifact/index.epub',
                medium: ['English'],
                createdOn: '2020-10-15T04:14:28.339+0000',
                lastUpdatedOn: '2020-10-15T04:19:30.101+0000',
                originData: {
                    identifier: 'do_21312917869280460814945',
                    repository: 'https://dock.preprod.ntp.net.in/api/content/v1/read/do_21312917869280460814945'
                },
                creator: 'classmate2',
                pkgVersion: 1,
                versionKey: '1602735570101',
                createdBy: '7ff59e4d-0f4f-4f25-8244-969423e91a16',
                board: 'CBSE',
                resourceType: 'Learn',
                orgDetails: {},
                licenseDetails: {
                    name: 'CC BY 4.0',
                    url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
                    description: 'For details see below:'
                }
            }
        };
    }
    playerEvents(event) {
    }
    playerTelemetryEvents(event) {
    }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _Users_santoshm_Documents_ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 38752:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Epub player\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Epub player</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div  style=\"height:100vh;width:100%;\">\n    <sunbird-epub-player [playerConfig]=\"playerConfig\" (playerEvent)=\"playerEvents($event)\"\n      (telemetryEvent)=\"playerTelemetryEvents($event)\"></sunbird-epub-player>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 44170:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map