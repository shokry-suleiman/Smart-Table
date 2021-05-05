import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

 @Input() count:any;
 @Output() rows:EventEmitter<any> = new EventEmitter<any>();
 @Output() p:EventEmitter<any> = new EventEmitter<any>();
 currentPage!:number;
 ngOnInit(){

 }

 RowsPerPage(event:any){
   console.log('event.target.value',event.target.value)
  this.rows.emit(event.target.value)
 }

 public pages(){
  return new Array(this.count)
 }
}
