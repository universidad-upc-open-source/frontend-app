import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

// Este módulo sólo nos servirá para concentrar los módulos de primerNg
@NgModule({
  exports: [TableModule, ButtonModule, SidebarModule],
})
export class PrimeNgModule {}
