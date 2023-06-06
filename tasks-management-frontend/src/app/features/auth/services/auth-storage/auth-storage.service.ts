import { Injectable } from '@angular/core';

import { IAuthStorageService } from './auth-storage.interface';
import { User } from '../../models/user.interface';

@Injectable()
export class AuthStorageService implements IAuthStorageService {
  public getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public getAuthenticatedUser(): User | null {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  }

  public isLoggedIn(): boolean {
    if (this.getAuthenticatedUser()) {
      return true;
    }

    this.removeAuthenticatedUser();
    this.removeAccessToken();

    return false;
  }

  public removeAccessToken(): void {
    localStorage.removeItem('accessToken');
  }

  public removeAuthenticatedUser(): void {
    localStorage.removeItem('user');
  }

  public setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  public setAuthenticatedUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
