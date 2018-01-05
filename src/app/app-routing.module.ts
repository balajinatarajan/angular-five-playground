import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ReviewComponent } from './review/review.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'flow/account',
    component: AccountComponent
  },
  {
    path: 'flow/review',
    component: ReviewComponent
  },
  {
    path: 'flow/complete',
    component: CompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
