import { BaseHttpService } from './base-http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor(private http:BaseHttpService) {

  }

  listAllUsers(){
    return this.http.get('users');
  }
}
