import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  error: any = null;
  linkSentSuccess: boolean = false;

  constructor(private _authService: AuthenticationService, private _router: Router,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.forgotPasswordForm = this._fb.group(
      {
        email: ["", [Validators.required, Validators.email]]
      }
    );
  }

  onForgotPasswordSubmit() {
    this.error = null;
    this.linkSentSuccess = false;
    this._authService.resetPassword(this.forgotPasswordForm.value.email)
      .then(() => {
        this.linkSentSuccess = true;
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
