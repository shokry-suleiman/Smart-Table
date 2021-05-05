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
	constructor(private usersService:UsersService){

	}

	ngOnInit(){
		this.usersService.listAllUsers().subscribe((res:any) =>{
			this.settings = res['columnSet'];
			this.data = res['dataSet'];
		})
	}
	
	
}
