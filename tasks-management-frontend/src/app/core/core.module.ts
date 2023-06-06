import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterLink, RouterOutlet } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

import { coreServices } from './services';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzDropDownModule,
    NzGridModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterLink,
    RouterOutlet,
  ],
  exports: [LayoutComponent],
  providers: [...coreServices],
})
export class CoreModule {}
