import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from './widget/widget.module';
import { ConsoleuiModule } from 'consoleui';
import { ShowcaseLayoutModule } from './showcase-layout/showcase-layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConsoleuiModule,
    ShowcaseLayoutModule,
    WidgetModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConsoleuiModule,
    ShowcaseLayoutModule,
    WidgetModule
  ]
})
export class SharedModule { }
