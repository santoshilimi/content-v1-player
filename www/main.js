(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Users_santoshm_Documents_ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _Users_santoshm_Documents_ionic_myApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @project-sunbird/sunbird-pdf-player-v9 */ 83229);
/* harmony import */ var _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @project-sunbird/sunbird-video-player-v9 */ 78286);
/* harmony import */ var _tab1_question_cursor_implementation_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1/question-cursor-implementation.service.service */ 24304);
/* harmony import */ var _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @project-sunbird/sunbird-quml-player-v9 */ 28999);
/* harmony import */ var _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @project-sunbird/sunbird-epub-player-v9 */ 87301);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _project_sunbird_sunbird_pdf_player_v9__WEBPACK_IMPORTED_MODULE_7__.SunbirdPdfPlayerModule, _project_sunbird_sunbird_video_player_v9__WEBPACK_IMPORTED_MODULE_8__.SunbirdVideoPlayerModule, _project_sunbird_sunbird_epub_player_v9__WEBPACK_IMPORTED_MODULE_9__.SunbirdEpubPlayerModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, { provide: _project_sunbird_sunbird_quml_player_v9__WEBPACK_IMPORTED_MODULE_11__.QuestionCursor, useClass: _tab1_question_cursor_implementation_service_service__WEBPACK_IMPORTED_MODULE_2__.QuestionCursorImplementation }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 24304:
/*!************************************************************************!*\
  !*** ./src/app/tab1/question-cursor-implementation.service.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionCursorImplementation": () => (/* binding */ QuestionCursorImplementation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 90758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 99457);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9500);





let QuestionCursorImplementation = class QuestionCursorImplementation {
    constructor(http) {
        this.http = http;
        this.listUrl = 'action/question/v1/list'; // Define this url to call list api in server
        this.questionsArray = {
            "questions": [{
                    "copyright": "tn",
                    "code": "ff0ceb77-1718-3338-2a23-78bef44ab777",
                    "subject": ["English"],
                    "channel": "01269878797503692810",
                    "responseDeclaration": {
                        "response1": {
                            "maxScore": 1,
                            "cardinality": "single",
                            "type": "integer",
                            "correctResponse": {
                                "value": "1",
                                "outcomes": {
                                    "SCORE": 1
                                }
                            }
                        }
                    },
                    "language": ["English"],
                    "medium": ["English"],
                    "mimeType": "application/vnd.sunbird.question",
                    "media": [],
                    "body": "<div class='question-body'><div class='mcq-title'><p>Which team has more youngers in the Ipl team?</p></div><div data-choice-interaction='response1' class='mcq-vertical'></div></div>",
                    "editorState": {
                        "options": [{
                                "answer": false,
                                "value": {
                                    "body": "<p>RCB</p>",
                                    "value": 0
                                }
                            }, {
                                "answer": true,
                                "value": {
                                    "body": "<p>Delhi Capital</p>",
                                    "value": 1
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<p>CSK</p>",
                                    "value": 2
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<p>MI</p>",
                                    "value": 3
                                }
                            }],
                        "question": "<p>Which team has more youngers in the Ipl team?</p>"
                    },
                    "templateId": "mcq-vertical",
                    "createdOn": "2021-04-14T10:38:20.112+0000",
                    "interactions": {
                        "response1": {
                            "type": "choice",
                            "options": [{
                                    "label": "<p>RCB</p>",
                                    "value": 0
                                }, {
                                    "label": "<p>Delhi Capital</p>",
                                    "value": 1
                                }, {
                                    "label": "<p>CSK</p>",
                                    "value": 2
                                }, {
                                    "label": "<p>MI</p>",
                                    "value": 3
                                }]
                        }
                    },
                    "gradeLevel": ["Class 10"],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2021-04-14T11:24:21.349+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_2132579057673175041129",
                    "lastStatusChangedOn": "2021-04-14T11:24:21.349+0000",
                    "audience": ["Student"],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Adarsh",
                    "solutions": [],
                    "qType": "MCQ",
                    "languageCode": ["en"],
                    "version": 1,
                    "pkgVersion": 1,
                    "versionKey": "1618396700115",
                    "showFeedback": "No",
                    "license": "CC BY-NC 4.0",
                    "prevState": "Draft",
                    "interactionTypes": ["choice"],
                    "framework": "tn_k-12_5",
                    "answer": "1",
                    "compatibilityLevel": 4,
                    "name": "Question_54",
                    "attributions": ["Tester"],
                    "board": "State (Tamil Nadu)",
                    "status": "Live"
                }, {
                    "copyright": "tn",
                    "code": "88a45adb-77ff-3c88-f917-771a756ab7e8",
                    "subject": ["English"],
                    "channel": "01269878797503692810",
                    "responseDeclaration": {
                        "response1": {
                            "maxScore": 1,
                            "cardinality": "single",
                            "type": "integer",
                            "correctResponse": {
                                "value": "0",
                                "outcomes": {
                                    "SCORE": 1
                                }
                            }
                        }
                    },
                    "language": ["English"],
                    "medium": ["English"],
                    "mimeType": "application/vnd.sunbird.question",
                    "media": [{
                            "id": "do_2132578840348590081294",
                            "type": "image",
                            "src": "https://staging.sunbirded.org/assets/public/content/do_2132578840348590081294/artifact/do_2132578840348590081294_1618394049641_rcblogo.jpg"
                        }, {
                            "id": "do_2132578841481379841295",
                            "type": "image",
                            "src": "https://staging.sunbirded.org/assets/public/content/do_2132578841481379841295/artifact/do_2132578841481379841295_1618394063598_delhicap.png"
                        }, {
                            "id": "do_2132578842983055361296",
                            "type": "image",
                            "src": "https://staging.sunbirded.org/assets/public/content/do_2132578842983055361296/artifact/do_2132578842983055361296_1618394079569_17-kingsjpg.jpg"
                        }, {
                            "id": "do_2132578844423290881297",
                            "type": "image",
                            "src": "https://staging.sunbirded.org/assets/public/content/do_2132578844423290881297/artifact/do_2132578844423290881297_1618394097137_csk.jpg"
                        }],
                    "body": "<div class='question-body'><div class='mcq-title'><p>Which the team score Highest total in the Ipl History</p></div><div data-choice-interaction='response1' class='mcq-grid-split'></div></div>",
                    "editorState": {
                        "options": [{
                                "answer": true,
                                "value": {
                                    "body": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578840348590081294/artifact/do_2132578840348590081294_1618394049641_rcblogo.jpg\" alt=\"do_2132578840348590081294\" data-asset-variable=\"do_2132578840348590081294\"></figure>",
                                    "value": 0
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578841481379841295/artifact/do_2132578841481379841295_1618394063598_delhicap.png\" alt=\"do_2132578841481379841295\" data-asset-variable=\"do_2132578841481379841295\"></figure>",
                                    "value": 1
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578842983055361296/artifact/do_2132578842983055361296_1618394079569_17-kingsjpg.jpg\" alt=\"do_2132578842983055361296\" data-asset-variable=\"do_2132578842983055361296\"></figure>",
                                    "value": 2
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578844423290881297/artifact/do_2132578844423290881297_1618394097137_csk.jpg\" alt=\"do_2132578844423290881297\" data-asset-variable=\"do_2132578844423290881297\"></figure>",
                                    "value": 3
                                }
                            }],
                        "question": "<p>Which the team score Highest total in the Ipl History</p>"
                    },
                    "templateId": "mcq-grid-split",
                    "createdOn": "2021-04-14T09:55:32.718+0000",
                    "interactions": {
                        "response1": {
                            "type": "choice",
                            "options": [{
                                    "label": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578840348590081294/artifact/do_2132578840348590081294_1618394049641_rcblogo.jpg\" alt=\"do_2132578840348590081294\" data-asset-variable=\"do_2132578840348590081294\"></figure>",
                                    "value": 0
                                }, {
                                    "label": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578841481379841295/artifact/do_2132578841481379841295_1618394063598_delhicap.png\" alt=\"do_2132578841481379841295\" data-asset-variable=\"do_2132578841481379841295\"></figure>",
                                    "value": 1
                                }, {
                                    "label": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578842983055361296/artifact/do_2132578842983055361296_1618394079569_17-kingsjpg.jpg\" alt=\"do_2132578842983055361296\" data-asset-variable=\"do_2132578842983055361296\"></figure>",
                                    "value": 2
                                }, {
                                    "label": "<figure class=\"image\"><img src=\"https://staging.sunbirded.org/assets/public/content/do_2132578844423290881297/artifact/do_2132578844423290881297_1618394097137_csk.jpg\" alt=\"do_2132578844423290881297\" data-asset-variable=\"do_2132578844423290881297\"></figure>",
                                    "value": 3
                                }]
                        }
                    },
                    "gradeLevel": ["Class 10"],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2021-04-14T11:24:20.840+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_2132578847352258561103",
                    "lastStatusChangedOn": "2021-04-14T11:24:20.840+0000",
                    "audience": ["Student"],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Adarsh",
                    "solutions": [],
                    "qType": "MCQ",
                    "languageCode": ["en"],
                    "version": 1,
                    "pkgVersion": 1,
                    "versionKey": "1618394132721",
                    "showFeedback": "No",
                    "license": "CC BY-NC 4.0",
                    "prevState": "Draft",
                    "interactionTypes": ["choice"],
                    "framework": "tn_k-12_5",
                    "answer": "0",
                    "compatibilityLevel": 4,
                    "name": "Question_44",
                    "attributions": ["Tester"],
                    "board": "State (Tamil Nadu)",
                    "status": "Live"
                }, {
                    "copyright": "tn",
                    "code": "57c6235e-0c6a-722b-c0ac-15c1b7f7a6d1",
                    "subject": ["English"],
                    "channel": "01269878797503692810",
                    "responseDeclaration": {
                        "response1": {
                            "maxScore": 1,
                            "cardinality": "single",
                            "type": "integer",
                            "correctResponse": {
                                "value": "3",
                                "outcomes": {
                                    "SCORE": 1
                                }
                            }
                        }
                    },
                    "language": ["English"],
                    "medium": ["English"],
                    "mimeType": "application/vnd.sunbird.question",
                    "media": [],
                    "body": "<div class='question-body'><div class='mcq-title'><p>How many title's did the Dehli capitals won it?</p></div><div data-choice-interaction='response1' class='mcq-grid-split'></div></div>",
                    "editorState": {
                        "options": [{
                                "answer": false,
                                "value": {
                                    "body": "<p>1</p>",
                                    "value": 0
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<p>4</p>",
                                    "value": 1
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<p>2</p>",
                                    "value": 2
                                }
                            }, {
                                "answer": true,
                                "value": {
                                    "body": "<p>0</p>",
                                    "value": 3
                                }
                            }],
                        "question": "<p>How many title's did the Dehli capitals won it?</p>"
                    },
                    "templateId": "mcq-grid-split",
                    "createdOn": "2021-04-14T10:30:46.255+0000",
                    "interactions": {
                        "response1": {
                            "type": "choice",
                            "options": [{
                                    "label": "<p>1</p>",
                                    "value": 0
                                }, {
                                    "label": "<p>4</p>",
                                    "value": 1
                                }, {
                                    "label": "<p>2</p>",
                                    "value": 2
                                }, {
                                    "label": "<p>0</p>",
                                    "value": 3
                                }]
                        }
                    },
                    "gradeLevel": ["Class 10"],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2021-04-14T11:24:21.292+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_2132579020493209601127",
                    "lastStatusChangedOn": "2021-04-14T11:24:21.292+0000",
                    "audience": ["Student"],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Adarsh",
                    "solutions": [],
                    "qType": "MCQ",
                    "languageCode": ["en"],
                    "version": 1,
                    "pkgVersion": 1,
                    "versionKey": "1618396246259",
                    "showFeedback": "No",
                    "license": "CC BY-NC 4.0",
                    "prevState": "Draft",
                    "interactionTypes": ["choice"],
                    "framework": "tn_k-12_5",
                    "answer": "3",
                    "compatibilityLevel": 4,
                    "name": "Question_53",
                    "attributions": ["Tester"],
                    "board": "State (Tamil Nadu)",
                    "status": "Live"
                }, {
                    "copyright": "tn",
                    "code": "90fe265a-a239-f9e3-1ef4-b739d1ab83f6",
                    "subject": ["English"],
                    "channel": "01269878797503692810",
                    "responseDeclaration": {
                        "response1": {
                            "maxScore": 1,
                            "cardinality": "single",
                            "type": "integer",
                            "correctResponse": {
                                "value": "3",
                                "outcomes": {
                                    "SCORE": 1
                                }
                            }
                        }
                    },
                    "language": ["English"],
                    "medium": ["English"],
                    "mimeType": "application/vnd.sunbird.question",
                    "media": [],
                    "body": "<div class='question-body'><div class='mcq-title'><p>How many world cup did Adam Gilchrist played?</p></div><div data-choice-interaction='response1' class='mcq-vertical'></div></div>",
                    "editorState": {
                        "options": [{
                                "answer": false,
                                "value": {
                                    "body": "<p>8</p>",
                                    "value": 0
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<p>6</p>",
                                    "value": 1
                                }
                            }, {
                                "answer": false,
                                "value": {
                                    "body": "<p>5</p>",
                                    "value": 2
                                }
                            }, {
                                "answer": true,
                                "value": {
                                    "body": "<p>7</p>",
                                    "value": 3
                                }
                            }],
                        "question": "<p>How many world cup did Adam Gilchrist played?</p>"
                    },
                    "templateId": "mcq-vertical",
                    "createdOn": "2021-04-14T11:02:31.011+0000",
                    "interactions": {
                        "response1": {
                            "type": "choice",
                            "options": [{
                                    "label": "<p>8</p>",
                                    "value": 0
                                }, {
                                    "label": "<p>6</p>",
                                    "value": 1
                                }, {
                                    "label": "<p>5</p>",
                                    "value": 2
                                }, {
                                    "label": "<p>7</p>",
                                    "value": 3
                                }]
                        }
                    },
                    "gradeLevel": ["Class 10"],
                    "primaryCategory": "Multiple Choice Question",
                    "contentDisposition": "inline",
                    "lastUpdatedOn": "2021-04-14T11:24:21.034+0000",
                    "contentEncoding": "gzip",
                    "showSolutions": "No",
                    "allowAnonymousAccess": "Yes",
                    "identifier": "do_2132579176530821121147",
                    "lastStatusChangedOn": "2021-04-14T11:24:21.034+0000",
                    "audience": ["Student"],
                    "visibility": "Parent",
                    "showTimer": "No",
                    "author": "Adarsh",
                    "solutions": [],
                    "qType": "MCQ",
                    "languageCode": ["en"],
                    "version": 1,
                    "pkgVersion": 1,
                    "versionKey": "1618398151014",
                    "showFeedback": "No",
                    "license": "CC BY-NC 4.0",
                    "prevState": "Draft",
                    "interactionTypes": ["choice"],
                    "framework": "tn_k-12_5",
                    "answer": "3",
                    "compatibilityLevel": 4,
                    "name": "Question_63",
                    "attributions": ["Tester"],
                    "board": "State (Tamil Nadu)",
                    "status": "Live"
                }],
            "count": 4
        };
    }
    getQuestionSet(identifier) {
        // if (this.listUrl) {
        const hierarchy = this.http.get("https://staging.sunbirded.org/learner/questionset/v1/hierarchy/" + identifier);
        const questionSet = this.http.get(`https://staging.sunbirded.org/api/questionset/v1/read/${identifier}?fields=instructions`);
        return ((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([hierarchy, questionSet]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            let questionSet = res[0]['result']['questionSet'];
            if (res[1]['result']['questionset']['instructions'] && questionSet) {
                questionSet['instructions'];
            }
            return { questionSet };
        })));
        // } 
    }
    getAllQuestionSet(identifiers) {
        const requests = identifiers.map(id => {
            return this.http.get(`https://staging.sunbirded.org/learner/questionset/v1/hierarchy/${id}?fields=maxScore`);
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)(requests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res.map(item => item["result"].questionSet.maxScore);
        }));
    }
    getQuestions(identifiers) {
        if (this.listUrl) {
            const option = {
                url: this.listUrl,
                data: {
                    request: {
                        search: { identifier: identifiers }
                    }
                }
            };
            return this.post(option).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
                return data.result;
            }));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.questionsArray);
        }
    }
    getQuestion(identifier) {
        if (this.listUrl) {
            const option = {
                url: this.listUrl,
                data: {
                    request: {
                        search: { identifier: [identifier] }
                    }
                }
            };
            return this.post(option).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => {
                return data.result;
            }));
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.questionsArray[0]);
        }
    }
    post(requestParam) {
        const httpOptions = {
            headers: { 'Content-Type': 'application/json' }
        };
        return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((data) => {
            if (data.responseCode !== 'OK') {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(data);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(data);
        }));
    }
};
QuestionCursorImplementation.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
QuestionCursorImplementation = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], QuestionCursorImplementation);



/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		93154,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 25893:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map