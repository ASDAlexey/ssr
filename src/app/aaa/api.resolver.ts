import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { UserService } from '@app/aaa/api.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiResolver implements Resolve<any> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // return this.userService.show(parseInt(route.params.userId, 10)).pipe(
    return this.userService.show(1).pipe(
      map(({ data }) => data),
      // tap(user => this.store$.dispatch(loadUserByIdSuccess({ user }))),
      catchError(error => {
        // this.store$.dispatch(logout({ refreshToken: null }));
        return of(error);
      }),
    );
  }
}
