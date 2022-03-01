import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SunbirdEpubPlayerModule } from '@project-sunbird/sunbird-epub-player-v9';
import { QuestionCursorImplementation } from '../tab1/question-cursor-implementation.service.service';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    SunbirdEpubPlayerModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
  ],
  providers: [{ provide: QuestionCursor, useClass: QuestionCursorImplementation }],

  declarations: [Tab3Page]
})
export class Tab3PageModule {}
