import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return timer(3000)
    .pipe(switchMap(() => this.http.get('https://jsonplaceholder.typicode.com/users')))
  }
}
