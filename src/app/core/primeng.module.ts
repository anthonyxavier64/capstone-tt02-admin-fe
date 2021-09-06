import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  exports: [
    InputTextModule,
    ButtonModule,
    CardModule,
    VirtualScrollerModule,
    DynamicDialogModule,
  ],
})
export class PrimeNgModule {}
