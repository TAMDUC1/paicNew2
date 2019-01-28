import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CongtrinhdaukhiPage } from './congtrinhdaukhi.page';

const routes: Routes = [
    {
        path: '',
        component: CongtrinhdaukhiPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CongtrinhdaukhiPage]
})
export class CongtrinhdaukhiPageModule {}
