import { Component, OnInit, ViewChild, ElementRef, Inject, OnDestroy } from '@angular/core';
declare const cordova;
// import {} from ''
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  playerConfig = {"metadata":{"copyright":"Test axis,2127","lastStatusChangedOn":"2022-01-11T15:21:01.393+0000","originData":{"identifier":"do_21345055814708428811903","repository":"https://dockstaging.sunbirded.org/api/content/v1/read/do_21345055814708428811903"},"parent":"do_2134509884923494401601","author":"?????","se_mediumIds":["ekstep_ncert_k-12_medium_english"],"mediaType":"content","name":"Learning Resource_webm","se_topicIds":["ekstep_ncert_k-12_topic_62113a9a1815b8f14e3103458f2b7c56cf2eeaf5"],"discussionForum":{"enabled":"No"},"createdOn":"2022-01-11T15:20:57.130+0000","createdFor":["01344484093886464035"],"channel":"01344484093886464035","source":"https://dockstaging.sunbirded.org/api/content/v1/read/do_21345055814708428811903","lastUpdatedOn":"2022-01-11T15:50:47.142+0000","subject":["Hindi"],"size":2662003,"se_topics":["कर चले हम फ़िदा"],"streamingUrl":"https://sunbirddevmedia-inct.streaming.media.azure.net/9e45c4d8-37bf-430f-a467-388b37075d25/webm1-copy-17.ism/manifest(format=m3u8-aapl-v3)","identifier":"do_21345055814708428811903","se_gradeLevelIds":["ekstep_ncert_k-12_gradelevel_class10"],"description":"webm","gradeLevel":["Class 10"],"ownershipType":["createdBy"],"mediumIds":["ekstep_ncert_k-12_medium_english"],"compatibilityLevel":1,"audience":["Student"],"trackable":{"enabled":"No","autoBatch":"No"},"se_boards":["CBSE"],"os":["All"],"primaryCategory":"Learning Resource","appIcon":"https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21345055814708428811903/artifact/book.thumb.thumb.thumb.jpg","languageCode":["en"],"se_mediums":["English"],"se_subjectIds":["ekstep_ncert_k-12_subject_hindi"],"downloadUrl":"https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21345055814708428811903/learning-resource_webm_1641914461030_do_21345055814708428811903_1.ecar","se_subjects":["Hindi"],"medium":["English"],"attributions":"","framework":"ekstep_ncert_k-12","creator":"cocreate1","versionKey":"1641916247142","mimeType":"video/webm","code":"b08a09d2-aeee-8c4d-3e0a-56293a0e27b4","se_boardIds":["ekstep_ncert_k-12_board_cbse"],"license":"CC BY 4.0","version":2,"prevStatus":"Draft","contentType":"PreviousBoardExamPapers","prevState":"Review","language":["English"],"board":"CBSE","lastPublishedOn":"2022-01-11T15:21:00.985+0000","objectType":"Content","origin":"do_21345055814708428811903","subjectIds":["ekstep_ncert_k-12_subject_hindi"],"status":"Live","programId":"51ae9520-6f9c-11ec-902a-3b5d30502ba5","createdBy":"53237627-a014-49cf-8f87-557089b90b15","dialcodeRequired":"No","lastSubmittedOn":"2022-01-11T15:20:59.858+0000","interceptionPoints":{},"keywords":["All_Contents"],"idealScreenSize":"normal","contentEncoding":"identity","consumerId":"cb069f8d-e4e1-46c5-831f-d4a83b323ada","lastPublishedBy":"6da7b18b-f25f-492c-8ab5-d1ecad0f61f4","topic":["कर चले हम फ़िदा"],"topicsIds":["ekstep_ncert_k-12_topic_62113a9a1815b8f14e3103458f2b7c56cf2eeaf5"],"se_gradeLevels":["Class 10"],"osId":"org.ekstep.quiz.app","se_FWIds":["ekstep_ncert_k-12"],"appId":"staging.dock.portal","contentDisposition":"inline","previewUrl":"https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21345055814708428811903/artifact/webm1-copy-17.webm","boardIds":["ekstep_ncert_k-12_board_cbse"],"artifactUrl":"https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21345055814708428811903/artifact/webm1-copy-17.webm","visibility":"Parent","credentials":{"enabled":"No"},"processId":"bf0fc4f7-56e7-4227-8f8a-aac94f35696c","variants":{"full":{"ecarUrl":"https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21345055814708428811903/learning-resource_webm_1641914461030_do_21345055814708428811903_1.ecar","size":"2617248"},"spine":{"ecarUrl":"https://sunbirdstagingpublic.blob.core.windows.net/sunbird-content-staging/content/do_21345055814708428811903/learning-resource_webm_1641914461354_do_21345055814708428811903_1_SPINE.ecar","size":"3563"}},"gradeLevelIds":["ekstep_ncert_k-12_gradelevel_class10"],"pkgVersion":1,"idealScreenDensity":"hdpi","contentMetadata":{"virality":{"origin":"67f21dd4d46fc2a6bf3893f4cc19743d86d482bc","transferCount":0}},"basePath":"/_app_file_/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21345055814708428811903","isAvailableLocally":false},"config":{"showEndPage":false,"endPage":[{"template":"assessment","contentType":["SelfAssess"]}],"splash":{"webLink":"","text":"","icon":"","bgImage":"assets/icons/splacebackground_1.png"},"overlay":{"enableUserSwitcher":true,"showUser":false},"plugins":[{"id":"org.sunbird.player.endpage","ver":"1.1","type":"plugin"}],"nextContent":{"name":"PPDF","identifier":"do_21345055169350860811889"},"sideMenu":{"showShare":true,"showDownload":true,"showReplay":false,"showExit":true,"showPrint":false,"enable":false}},"context":{"did":"67f21dd4d46fc2a6bf3893f4cc19743d86d482bc","origin":"https://staging.sunbirded.org","pdata":{"id":"staging.diksha.app","pid":"sunbird.app.contentplayer","ver":"3.9.local.0-debug"},"objectRollup":{"l1":"do_2134509883461713921600","l2":"do_2134509884923494401601","l5":"do_21345055814708428811903"},"sid":"535bcf0a-dfc0-4813-9ef5-778abcfcf246","actor":{"type":"User","id":"8dcf9ce3-253d-4eb2-ab02-2dca6dd49df7"},"deeplinkBasePath":"","contextRollup":{"l1":"0126796199493140480"},"cdata":[{"id":"English","type":"Section"},{"id":"browse_by_category","type":"RootSection"},{"id":"do_2134509883461713921600","type":"RootId"},{"id":"content-detail","type":"ChildUi"},{"id":"teacher","type":"UserType"},{"id":"streaming","type":"PlayerLaunch"}],"channel":"0126796199493140480","userData":{"firstName":"ssss","lastName":""},"dispatcher":{}},"appContext":{"local":true,"server":false,"groupId":""},"data":{}}

  @ViewChild('preview', { static: false }) previewElement: ElementRef;

  constructor( ){}
  playerEvents(event) {

  }
  playerTelemetryEvents(event) {

  }
  async ionViewWillEnter() {
    const playerInterval = setInterval(() => {
        this.playerConfig['uid'] = this.playerConfig['context'].actor.id;
        this.playerConfig['metadata'].basePath = '/_app_file_' + this.playerConfig['metadata'].basePath;


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
              this.previewElement.nativeElement.contentWindow['initializePreview'](this.playerConfig);
              this.previewElement.nativeElement.contentWindow.addEventListener('message', resp => {
                if (resp.data === 'renderer:question:submitscore') {
                  // this.courseService.syncAssessmentEvents().subscribe();
                } else if (resp.data === 'renderer:question:reviewAssessment') {
                  // this.courseService.clearAssessments().subscribe();
                } else if (resp.data && typeof resp.data === 'object') {
                  if (resp.data['player.pdf-renderer.error']) {
                    const pdfError = resp.data['player.pdf-renderer.error'];
                    if (pdfError.name === 'MissingPDFException') {
                      const downloadUrl = this.playerConfig['metadata']['contentData']['streamingUrl'] ||
                        this.playerConfig['metadata']['contentData']['artifactUrl'];
                      // this.telemetryGeneratorService.generateInteractTelemetry(
                      //   InteractType.TOUCH,
                      //   InteractSubtype.DOWNLOAD_PDF_CLICKED,
                      //   Environment.PLAYER,
                      //   PageId.PLAYER,
                      //   ContentUtil.getTelemetryObject(this.playerConfig['metadata']['contentData']),
                      //   undefined,
                      //   ContentUtil.generateRollUp(this.playerConfig['metadata']['hierarchyInfo'], this.playerConfig['metadata']['identifier']));
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
