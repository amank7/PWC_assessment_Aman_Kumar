import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/users'

  getUsers() {
    return this.http.get(this.url)
  }
}
