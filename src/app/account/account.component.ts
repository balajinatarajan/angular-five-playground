import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./../home/home.component.less', './account.component.less']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.google.com')
      .toPromise()
      .then(response => {
        console.log(response);
      })
  }

  onBtnClick(event) {
    console.log(event);

    this.router.navigate(['about']);
  }

}
