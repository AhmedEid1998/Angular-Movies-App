import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../sevice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  error: string = '';
  loginForm: FormGroup = new FormGroup(
    {
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][0-9]{5}$/),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    },
    { validators: this.rePassword }
  );

  rePassword(loginForm: any) {
    let passwordControl = loginForm.get('password');
    let repasswordControl = loginForm.get('rePassword');
    if (passwordControl?.value == repasswordControl?.value) {
      return null;
    } else {
      repasswordControl?.setErrors({
        passwordMatch: 'rePassword must Matched',
      });
      return { passwordMatch: 'rePassword must Matched' };
    }
  }
  submitLogin(forminfo: FormGroup) {
    this._AuthService.login(forminfo.value).subscribe(
      (response) => {
        console.log(response);
        if (response.message == 'success') {
          localStorage.setItem('userToken', response.token);
          this._AuthService.setUserData();
          this._Router.navigate(['/home']);

          //logout automatic 3 seconds after logging in
          // setTimeout(() => { this._AuthService.logout() } , 3000);
        }
      },
      (err) => {
        this.error = err.error.message;
      }
    );
  }
}
