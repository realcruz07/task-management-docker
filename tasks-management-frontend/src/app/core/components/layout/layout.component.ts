import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IAuthStorageService } from '../../../features/auth/services/auth-storage/auth-storage.interface';

import { navigation } from '../../constants/app-navigation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public isCollapsed = false;
  public menuItems = navigation;

  public constructor(
    private readonly authStorageService: IAuthStorageService,
    private readonly router: Router,
  ) {}

  public logout(): void {
    this.authStorageService.removeAccessToken();
    this.authStorageService.removeAuthenticatedUser();
    this.router
      .navigate(['auth', 'login'])
      .catch(() => console.error('Error on navigate to login'));
  }
}
