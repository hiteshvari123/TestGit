import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewJobsPageRoutingModule } from './view-jobs-routing.module';

import { ViewJobsPage } from './view-jobs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ViewJobsPageRoutingModule
  ],
  declarations: [ViewJobsPage]
})
export class ViewJobsPageModule {}
