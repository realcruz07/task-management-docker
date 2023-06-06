import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

import { IRegisterUserService } from '../../services/register/register-user.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  public isLoading = false;
  public registerForm!: FormGroup;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly message: NzMessageService,
    private readonly registerUserService: IRegisterUserService,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, Validators.required],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.registerUserService
        .register(this.registerForm.value)
        .subscribe(() => {
          this.isLoading = false;
          this.router
            .navigate(['auth', 'login'])
            .catch(() => console.error('Error on navigate to login'));
          this.message.create('success', `The user registered successfully`);
        });
    }
  }

  public isFieldValid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return field !== null && field.invalid && (field.dirty || field.touched);
  }
}
