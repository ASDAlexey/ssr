import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  // https://github.com/angular/universal/issues/856
  show(id: number): Observable<{ data: any }> {
    // return this.http.get<{ data: any }>(`http://dummy.restapiexample.com/api/v1/employees`);
    return this.http.get<{ data: any }>(`https://api.sportdiary.local/users/${id}`);
  }
}
