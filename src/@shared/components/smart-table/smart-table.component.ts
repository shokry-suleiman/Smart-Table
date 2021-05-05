import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  @Input() settings:any;
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
    console.log('settings',this.settings)
  }

}
