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
		console.log('event',event)
		if(event > this.currentData.length){
			this.currentData = this.data.slice(0,event);
		}else {
			this.currentData = this.data.slice(0,event);
		}
	}
}
