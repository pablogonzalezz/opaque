import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.addGoogleScript();
  }

  addGoogleScript() {
    let scriptDiv = document.createElement('script');

    scriptDiv.setAttribute('async', '');
    scriptDiv.setAttribute('defer', '');
    scriptDiv.setAttribute('src', 'https://accounts.google.com/gsi/client');

    document.body.appendChild(scriptDiv);
  }
}
