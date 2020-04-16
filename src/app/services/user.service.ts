import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  actionUrl: string = environment.baseUrl;

  constructor(private http : HttpClient ) {}
  GetProducts(categoryid) {
    return this.http.get(this.actionUrl+'/api/Product/'+ categoryid);
  }
}

