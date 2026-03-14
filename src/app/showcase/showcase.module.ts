import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { CopyOutline, CheckOutline } from '@ant-design/icons-angular/icons';

import { SharedModule } from './common/shared/shared.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { ConsoleuiModule } from 'consoleui';

const icons = [CopyOutline, CheckOutline];

@NgModule({
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Third-party modules
    NgZorroAntdModule,
    // Local modules
    SharedModule,
    ShowcaseRoutingModule,
    ConsoleuiModule.forRoot({ dataTable: { showSerialNumber: false } })
  ],
  declarations: [ShowcaseComponent],
  bootstrap: [ShowcaseComponent],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class ShowcaseModule { }
