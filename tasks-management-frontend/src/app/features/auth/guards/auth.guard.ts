import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { IAuthStorageService } from '../services/auth-storage/auth-storage.interface';

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authStorageService = inject(IAuthStorageService);
  const router = inject(Router);

  const currentPath = route.routeConfig?.path || '/';
  const isLoggedIn = authStorageService.isLoggedIn();
  const isAuthForm = ['login', 'register'].includes(currentPath);

  if (isLoggedIn && isAuthForm) {
    router
      .navigate(['home'])
      .catch(() => console.error('Error on navigate to home'));

    return false;
  }

  if (!isLoggedIn && !isAuthForm) {
    router
      .navigate(['auth', 'login'])
      .catch(() => console.error('Error on navigate to login'));
  }

  return isLoggedIn || isAuthForm;
};

export const AuthGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => canActivate(route, state);
