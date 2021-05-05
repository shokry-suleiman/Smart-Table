import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SmartTableComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SmartTableComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
