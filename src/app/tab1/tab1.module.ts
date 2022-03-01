import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';
import { QuestionCursorImplementation } from './question-cursor-implementation.service.service';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
@NgModule({
  imports: [
    SunbirdVideoPlayerModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  providers: [{ provide: QuestionCursor, useClass: QuestionCursorImplementation }],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
