import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    InputTextModule,
    ButtonModule,
    CardModule,
    VirtualScrollerModule,
    DataViewModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
