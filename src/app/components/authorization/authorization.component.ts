import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      if(!this.isLoggedin) {
        this.socialUser = user;
        
        window.location.href = `opaque://authorization/?name=${this.socialUser.name}&photo=${this.socialUser.photoUrl}&token=${this.socialUser.authToken}&email=${this.socialUser.email}`;
        window.close();
      }
      this.isLoggedin = user != null;
    });
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
}
