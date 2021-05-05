import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    SmartTableComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SmartTableComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
