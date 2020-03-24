import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout() {
    this._authService.logout();
  }

}
