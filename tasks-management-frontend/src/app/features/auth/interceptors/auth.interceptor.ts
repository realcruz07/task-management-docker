/* eslint-disable */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAuthStorageService } from '../services/auth-storage/auth-storage.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public constructor(
    private readonly authStorageService: IAuthStorageService,
  ) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const isAuthForm = request.url.includes('login') || request.url.includes('register');

    if (!isAuthForm) {
      const authToken = this.authStorageService.getAccessToken();

      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
