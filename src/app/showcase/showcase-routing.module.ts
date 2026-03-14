import { ShowcaseLayoutMainComponent } from './common/shared/showcase-layout/showcase-layout-main/showcase-layout-main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShowcaseLayoutMainComponent, children: [
    {path: '', redirectTo: 'showcase/data/data-table', pathMatch: 'full'},
    {path: 'intro', loadChildren: () => import('app/showcase/intro/intro.module').then(m => m.IntroModule)},
    {path: 'showcase', children: [
      // {path: 'data', loadChildren: 'app/showcase/data-showcase/data-showcase.module#DataShowcaseModule'}
      {path: 'layout', loadChildren: () => import('app/showcase/layout-showcase/layout-showcase.module').then(m => m.LayoutShowcaseModule)},
      {path: 'data', loadChildren: () => import('app/showcase/data-showcase/data-showcase.module').then(m => m.DataShowcaseModule)},
      {path: 'cropper', loadChildren: () => import('app/showcase/cropper-showcase/cropper-showcase.module').then(m => m.CropperShowcaseModule)},
      {path: 'forms', loadChildren: () => import('app/showcase/forms-showcase/forms-showcase.module').then(m => m.FormsShowcaseModule)},
      {path: 'imgLoader', loadChildren: () => import('app/showcase/img-lazy-load-showcase/img-lazy-load-showcase.module').then(m => m.ImgLazyLoadShowcaseModule)},
    ]},
  ]}
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ShowcaseRoutingModule { }

export const routedComponents = [];
