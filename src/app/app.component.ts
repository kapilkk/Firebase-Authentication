import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _router: Router, private _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe((auth) => {
      if (auth)
        this._router.navigate(['/dashboard']);
      else
        this._router.navigate(['/auth/login']);
    });
  }
}
