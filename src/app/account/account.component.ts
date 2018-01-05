import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./../home/home.component.less', './account.component.less']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBtnClick(event) {
    console.log(event);

    this.router.navigate(['about']);
  }

}
