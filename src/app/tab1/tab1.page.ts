import { Component, OnInit, ViewChild, ElementRef, Inject, OnDestroy } from '@angular/core';

declare const cordova;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  config = {
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
      actor: {id:111},
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
      "copyright": "Tamil Nadu",
      "subject": [
        "Computer Science"
      ],
      "channel": "01269878797503692810",
      "language": [
        "English"
      ],
      "mimeType": "application/vnd.ekstep.html-archive",
      "objectType": "Content",
      "gradeLevel": [
        "Class 4",
        "Class 2"
      ],
      "appIcon": "https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21342267409765171211099/artifact/do_213254264969953280137_1617952267274_1200px-the_president_of_india_smt.thumb._pratibha_patil.thumb.jpg",
      "primaryCategory": "Explanation Content",
      "artifactUrl": "https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21342267409765171211099/artifact/htmlcontent_test_1638510022778.zip",
      "contentType": "Resource",
      "identifier": "do_21342267409765171211099",
      "audience": [
        "Student"
      ],
      "visibility": "Default",
      "author": "Adarsh",
      "mediaType": "content",
      "osId": "org.ekstep.quiz.app",
      "languageCode": [
        "en"
      ],
      "license": "CC BY 4.0",
      "name": "Dec03 html",
      "attributions": [
        "Tester"
      ],
      "status": "Live",
      "code": "c974bb4a-7a28-4130-8e57-ae27ee3bcb31",
      "interceptionPoints": {
        
      },
      "streamingUrl": "https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/html/do_2129513857902182401137-latest",
      "medium": [
        "English",
        "Tamil"
      ],
      "createdOn": "2021-12-03T05:40:21.692+0000",
      "copyrightYear": 2021,
      "additionalCategories": [
        "Textbook"
      ],
      "lastUpdatedOn": "2021-12-03T05:46:53.295+0000",
      "creator": "ContentcreatorTN",
      "pkgVersion": 2,
      "versionKey": "1638510154012",
      "framework": "tn_k-12_5",
      "createdBy": "4cd4c690-eab6-4938-855a-447c7b1b8ea9",
      "board": "State (Tamil Nadu)",
      "resourceType": "Learn",
      "orgDetails": {
        "email": null,
        "orgName": "Tamil Nadu"
      },
      "basePath": '',
      "licenseDetails": {
        "name": "CC BY 4.0",
        "url": "https://creativecommons.org/licenses/by/4.0/legalcode",
        "description": "For details see below:"
      }
    }
  }

  @ViewChild('preview', { static: false }) previewElement: ElementRef;

  constructor( ){}
  playerEvents(event) {

  }
  playerTelemetryEvents(event) {

  }
  async ionViewWillEnter() {
    const playerInterval = setInterval(() => {
        this.config['uid'] = this.config['context'].actor.id;
        this.config['metadata'].basePath = '/_app_file_' + this.config['metadata'].basePath;


        if (this.previewElement?.nativeElement) {
          clearInterval(playerInterval);
          // This is to reload a iframe as iframes reload method not working on cross-origin.
          const src = this.previewElement.nativeElement.src;
          this.previewElement.nativeElement.src = '';
          this.previewElement.nativeElement.src = src;
          this.previewElement.nativeElement.onload = () => {
            setTimeout(() => {
              this.previewElement.nativeElement.contentWindow['cordova'] = window['cordova'];
              this.previewElement.nativeElement.contentWindow['Media'] = window['Media'];
              this.previewElement.nativeElement.contentWindow['initializePreview'](this.config);
              this.previewElement.nativeElement.contentWindow.addEventListener('message', resp => {
                if (resp.data === 'renderer:question:submitscore') {
                  // this.courseService.syncAssessmentEvents().subscribe();
                } else if (resp.data === 'renderer:question:reviewAssessment') {
                  // this.courseService.clearAssessments().subscribe();
                } else if (resp.data && typeof resp.data === 'object') {
                  if (resp.data['player.pdf-renderer.error']) {
                    const pdfError = resp.data['player.pdf-renderer.error'];
                    if (pdfError.name === 'MissingPDFException') {
                      const downloadUrl = this.config['metadata']['contentData']['streamingUrl'] ||
                        this.config['metadata']['contentData']['artifactUrl'];
                      // this.telemetryGeneratorService.generateInteractTelemetry(
                      //   InteractType.TOUCH,
                      //   InteractSubtype.DOWNLOAD_PDF_CLICKED,
                      //   Environment.PLAYER,
                      //   PageId.PLAYER,
                      //   ContentUtil.getTelemetryObject(this.config['metadata']['contentData']),
                      //   undefined,
                      //   ContentUtil.generateRollUp(this.config['metadata']['hierarchyInfo'], this.config['metadata']['identifier']));
                      // this.openPDF(downloadUrl);
                    }
                  } else if (resp.data && resp.data.event === 'renderer:contentNotComaptible'
                    || resp.data && resp.data.data.event === 'renderer:contentNotComaptible') {
                    cordova.plugins.InAppUpdateManager.checkForImmediateUpdate(
                      () => { },
                      () => { }
                    );
                  } else if (resp.data && resp.data.event === 'renderer:maxLimitExceeded') {
                    // this.closeIframe();
                  }
                } else if (this.isJSON(resp.data)) {
                  const response = JSON.parse(resp.data);
                  if (response.event === 'renderer:navigate') {
                    // this.navigateBackToTrackableCollection = true;
                    // this.navigateBackToContentDetails = false;
                    // this.closeIframe({
                    //   identifier: response.data.identifier
                    // });
                  }
                }
              });
            }, 1000);
          };
        }
    }, 500);

  }
  private isJSON(input): boolean {
    try {
      JSON.parse(input);
      return true;
    } catch (e) {
      return false;
    }
  }
}
