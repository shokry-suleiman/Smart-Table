import { UsersService } from './../@resources/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	settings:any;
	data:any;
	currentData:any;
	rowsLength:number = 10;
	curretIndex:number =0;
	constructor(private usersService:UsersService){

	}

	ngOnInit(){
		this.usersService.listAllUsers().subscribe((res:any) =>{
			this.settings = res['columnSet'];
			console.log('this.settings',this.settings)
			this.data = res['dataSet'];
			this.currentData = res['dataSet'].slice(0,10);
			console.log('this.currentData',this.currentData)
		})
	}
	
	rows(event:any){
		this.rowsLength = event;
	}

	paginate(event:any){
		this.curretIndex = event - 1;
		this.currentData = this.data.slice(this.curretIndex * this.rowsLength,
										  Number(this.curretIndex * this.rowsLength ) + 
										  Number(this.rowsLength));		
	}
}
