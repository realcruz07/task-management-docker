import { Component } from '@angular/core';

import { IAuthStorageService } from './features/auth/services/auth-storage/auth-storage.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public constructor(
    private readonly authStorageService: IAuthStorageService,
  ) {}

  public isAuthenticated(): boolean {
    return this.authStorageService.isLoggedIn();
  }
}
