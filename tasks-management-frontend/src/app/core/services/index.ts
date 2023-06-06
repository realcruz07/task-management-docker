import { Provider } from '@angular/core';

import { AuthStorageService } from '../../features/auth/services/auth-storage/auth-storage.service';
import { IAuthStorageService } from '../../features/auth/services/auth-storage/auth-storage.interface';

export const coreServices: Provider[] = [
  {
    provide: IAuthStorageService,
    useClass: AuthStorageService,
  },
];
