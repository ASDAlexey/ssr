import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  show(id: number): Observable<{ data: any }> {
    return this.http.get<{ data: any }>(`/users/${id}`);
  }
}
