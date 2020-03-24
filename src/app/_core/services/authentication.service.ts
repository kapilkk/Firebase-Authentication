import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState: any = null;

  constructor(private _afAuth: AngularFireAuth, private _router: Router) {
    this._afAuth.authState.subscribe((auth) => {
      this.authState = auth;

      if (this.authState)
        this._router.navigate(['/home']);
      else
        this._router.navigate(['/auth/login']);
    });
  }


  login(user: User) {
    return this._afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    this._afAuth.auth.signOut();
    this._router.navigate(['/auth/login']);
  }

  resetPassword(email: string) {
    return this._afAuth.auth.sendPasswordResetEmail(email);
  }
}
