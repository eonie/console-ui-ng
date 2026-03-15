import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CopyOutline, CheckOutline, SearchOutline, DownOutline } from '@ant-design/icons-angular/icons';

import { SharedModule } from './common/shared/shared.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { ConsoleuiModule } from 'consoleui';
import { NzGridModule } from 'ng-zorro-antd/grid';

const icons = [CopyOutline, CheckOutline, SearchOutline, DownOutline];

@NgModule({
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ng-zorro-antd modules
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    NzModalModule,
    NzToolTipModule,
    NzDropDownModule,
    NzMenuModule,
    NzTableModule,
    NzCheckboxModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzPaginationModule,
    NzMessageModule,
    NzLayoutModule,
    NzCardModule,
    NzTabsModule,
    NzStepsModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzUploadModule,
    NzTransferModule,
    NzSliderModule,
    NzProgressModule,
    NzBadgeModule,
    NzTagModule,
    NzAlertModule,
    NzSpinModule,
    NzDrawerModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzSwitchModule,
    NzRadioModule,
    NzRateModule,
    NzInputNumberModule,
    NzCascaderModule,
    NzAutocompleteModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzCalendarModule,
    NzAvatarModule,
    NzListModule,
    NzCollapseModule,
    NzTimelineModule,
    NzBackTopModule,
    NzAffixModule,
    NzResultModule,
    NzSkeletonModule,
    NzSpaceModule,
    NzGridModule,
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
