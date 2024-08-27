import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step2PageRoutingModule } from './step-2-routing.module';

import { Step2Page } from './step-2.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step2PageRoutingModule,
    SharedModule,
  ],
  declarations: [Step2Page],
})
export class Step2PageModule {}
