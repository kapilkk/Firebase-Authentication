import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any = null;

  constructor(private _authService: AuthenticationService, private _router: Router,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required]
      }
    );
  }

  onLoginSubmit() {
    this.error = null;
    this._authService.login(this.loginForm.value)
      .then((res) => {
        this._router.navigate(['/dashboard']);
      })
      .catch((err) => {
        console.log(err);
        this.error = err;
      });
  }

  closeAlert() {
    this.error = null;
  }
}