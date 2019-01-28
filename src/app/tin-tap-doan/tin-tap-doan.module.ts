import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TinTapDoanPage } from './tin-tap-doan.page';

const routes: Routes = [
  {
    path: '',
    component: TinTapDoanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TinTapDoanPage]
})
export class TinTapDoanPageModule {}
