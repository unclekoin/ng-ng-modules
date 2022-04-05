import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about-page.component';
import {
  AboutExtraPageComponent
} from './about-extra-page/about-extra-page.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AboutPageComponent, children: [
      { path: 'extra', component: AboutExtraPageComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class AboutPageModule {

}
