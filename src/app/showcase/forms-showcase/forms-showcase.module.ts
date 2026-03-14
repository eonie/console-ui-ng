import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'ueditor', loadChildren: () => import('app/showcase/forms-showcase/ueditor-showcase/ueditor-showcase.module').then(m => m.UeditorShowcaseModule) },
      { path: 'ckeditor', loadChildren: () => import('app/showcase/forms-showcase/ckeditor-showcase/ckeditor-showcase.module').then(m => m.CkeditorShowcaseModule) },
      {
        path: 'fileupload',
        loadChildren: () => import('app/showcase/forms-showcase/fileupload-showcase/fileupload-showcase.module').then(m => m.FileuploadShowcaseModule)
      },
      { path: 'chips', loadChildren: () => import('app/showcase/forms-showcase/chips-showcase/chips-showcase.module').then(m => m.ChipsShowcaseModule) },
      { path: 'radio', loadChildren: () => import('app/showcase/forms-showcase/radio-showcase/radio-showcase.module').then(m => m.RadioShowcaseModule) },
      { path: 'tree-select', loadChildren: () => import('app/showcase/forms-showcase/tree-select-showcase/tree-select-showcase.module').then(m => m.TreeSelectShowcaseModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class FormsShowcaseModule { }
