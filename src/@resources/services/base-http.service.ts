import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class BaseHttpService {

	constructor(private http: HttpClient) { }

	get(url: string, headers?: any) {
		return this.http.get(`${environment.url}${url}`, { ...headers });
	}
}
