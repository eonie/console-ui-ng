import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBoxComponent } from './code-box/code-box.component';
import { HighlightComponent } from './highlight/highlight.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { AsciidocComponent } from './asciidoc/asciidoc.component';

const WIDGETS = [
  CodeBoxComponent,
  HighlightComponent,
  MarkdownComponent,
  AsciidocComponent
];

@NgModule({
  imports: [
    CommonModule,
    NzToolTipModule,
    NzIconModule,
    NzTabsModule,
  ],
  declarations: [...WIDGETS],
  exports: [...WIDGETS]
})
export class WidgetModule { }
