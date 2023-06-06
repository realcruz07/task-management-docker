import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

import { authServices } from './services';
import { LoginFormComponent } from './pages/login-form/login-form.component';

@NgModule({
  declarations: [RegisterFormComponent, LoginFormComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzMessageModule,
    ReactiveFormsModule,
  ],
  providers: [...authServices],
  exports: [RegisterFormComponent],
})
export class AuthModule {}
