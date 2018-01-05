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

  ngOnInit() {}

  onBtnClick(event) {
    this.http.get('http://localhost:4300/text', )
      .toPromise()
      .then((response: any) => {
        console.log(JSON.stringify(response));
      })
      .catch(error => {
        console.log(error);
      });

    // console.log(event);
    //
    // this.router.navigate(['about']);
  }

}
