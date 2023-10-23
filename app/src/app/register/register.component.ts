import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../sevice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  error: string = '';
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[01][2|0|5|1][0-9]{8}$/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][0-9]{5}$/),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    },
    { validators: this.rePassword }
  );

  rePassword(registerForm: any) {
    let passwordControl = registerForm.get('password');
    let repasswordControl = registerForm.get('rePassword');
    if (passwordControl?.value == repasswordControl?.value) {
      return null;
    } else {
      repasswordControl?.setErrors({
        passwordMatch: 'rePassword must Matched',
      });
      return { passwordMatch: 'rePassword must Matched' };
    }
  }

  // btnLogin(){
  //     this._Router.navigate(['/login']);
  // }

  submitRegister(forminfo: FormGroup) {
    this._AuthService.register(forminfo.value).subscribe(
      (response) => {
        if (response.message == 'success') {
          // awadih le el-login
          this._Router.navigate(['/login']);
          console.log(response.message);
        }
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }


}

/**
 * endPoint : signup
 * "name": "Ahmed Abd Al-Muti",
    "email":"ahmedmutti@gmail.com",
    "password":"Ahmed@123",
    "rePassword":"Ahmed@123",
    "phone":"01010700700"
 */
