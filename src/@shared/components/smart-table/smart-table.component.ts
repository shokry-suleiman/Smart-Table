import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'smart-table',
	templateUrl: './smart-table.component.html',
	styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

	@Input() settings: any;
	@Input() data: any;
	originalData = [];
	tableData: any;
	searchObj: any = {};
	filterObj: any = {
		search: {},
		filter: {}
	};
	searchResult: any;
	currentData: any;
	rowsLength: number = 10;
	curretIndex: number = 0;
	constructor() {

	}

	ngOnInit(): void {
		this.originalData = this.data;
		this.tableData = this.data;
		this.currentData = this.originalData?.slice(0, this.rowsLength);
	}

	filter() {
		let data: any[] = [...this.originalData];
		Object.keys(this.filterObj.search).forEach((key) => {
			if (this.filterObj.search[key] != '')
				data = [...this.applySearch(data, key, this.filterObj.search[key])]
		})
		Object.keys(this.filterObj.filter).forEach((key) => {
			if (this.filterObj.filter[key] != '')
				data = [...this.applayFilter(data, key, this.filterObj.filter[key])]
		})
		this.tableData = [...data]
		this.paginate(1);
	}

	applySearch(array: any[], key: string, value: string) {
		array = array.filter(
			(r) =>
				(r[key].toLocaleLowerCase().indexOf(value.toLocaleLowerCase())) !== -1
		);
		return array;
	}

	applayFilter(array: any[], key: string, value: string) {
		array = array.filter(
			(r) =>
				(r[key].toLocaleLowerCase()) == (value.toLocaleLowerCase())
		);
		return array;
	}

	rows(event: any) {
		this.rowsLength = event;
	}

	paginate(event: any) {
		this.curretIndex = event - 1;
		this.currentData = this.tableData.slice(this.curretIndex * this.rowsLength,
			Number(this.curretIndex * this.rowsLength) +
			Number(this.rowsLength));
	}

}
