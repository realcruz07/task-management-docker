import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

import { IAuthStorageService } from '../../services/auth-storage/auth-storage.interface';
import { ILoginUserService } from '../../services/login/login-user.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public isLoading = false;
  public loginForm!: FormGroup;

  public constructor(
    private readonly authStorageService: IAuthStorageService,
    private readonly formBuilder: FormBuilder,
    private readonly loginUserService: ILoginUserService,
    private readonly message: NzMessageService,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginUserService.login(this.loginForm.value).subscribe(
        (data) => {
          this.authStorageService.setAccessToken(data.accessToken);
          this.authStorageService.setAuthenticatedUser(data.user);
          this.isLoading = false;
          this.router
            .navigate(['home'])
            .catch(() => console.error('Error on navigate to home'));
        },
        (error) => {
          this.isLoading = false;
          switch (error.error.statusCode) {
            case 404:
              this.message.create('error', 'User not found');
              break;
            case 403:
              this.message.create('error', 'Wrong password');
              break;
            case 400:
              this.message.create('error', 'Bad request');
              break;
          }
        },
      );
    }
  }

  public isFieldValid(field: string): boolean {
    const formField = this.loginForm.get(field);
    return (
      formField !== null &&
      formField.invalid &&
      (formField.dirty || formField.touched)
    );
  }
}
