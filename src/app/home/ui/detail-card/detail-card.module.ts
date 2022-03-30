import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCardComponent } from './detail-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [DetailCardComponent],
  exports: [DetailCardComponent]
})
export class DetailCardComponentModule {}
