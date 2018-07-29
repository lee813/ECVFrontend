import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailViewComponent }      from './detail-view/detail-view.component';
import { FavoriteComponent } from "./favorite/favorite.component";

const routes: Routes = [
  { path: 'detail', component: DetailViewComponent },
  { path: 'favorite', component: FavoriteComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
