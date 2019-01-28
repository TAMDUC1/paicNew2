import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'congtrinhdaukhi', loadChildren: './congtrinhdaukhi/congtrinhdaukhi.module#CongtrinhdaukhiPageModule' },
  { path: 'tin-tap-doan', loadChildren: './tin-tap-doan/tin-tap-doan.module#TinTapDoanPageModule' },
  { path: 'phapluat', loadChildren: './phapluat/phapluat.module#PhapluatPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
