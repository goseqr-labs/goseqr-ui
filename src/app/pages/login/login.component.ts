import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../../_service/authentication.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  title = 'auth-guard-demo';

  constructor(private _auth: AuthenticationService, private _router: Router) {
    if (this._auth.loggedIn) {
      this._router.navigate(['home']);
    }
  }
  login(): void {
    if (this.username != '' && this.password != '') {
      if (this._auth.login(this.username, this.password)) {
        this._router.navigate(["home"]);
      }
      else
        alert("Wrong username or password");
    }
  }

  ngOnInit(): void {
  }

}

