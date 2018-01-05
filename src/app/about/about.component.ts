import { Component, OnInit } from '@angular/core';

import { TextService } from '../text.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [TextService]
})
export class AboutComponent implements OnInit {
  title = 'About';

  constructor(private textService: TextService) {}

  ngOnInit() {
    // console.log('ABOUT COMPONENT: ngOnInit');

    // const TIMEOUT_LIMIT = 3 * 1000; // in milliseconds
    //
    // Promise.all([
    //   this.textService.getText()
    //     .then((res: string) => {
    //       // console.log(`TextService.getText() response -> ${res}`);
    //       return res;
    //     }),
    //   new Promise((resolve) => {
    //     setTimeout(resolve, TIMEOUT_LIMIT, TIMEOUT_LIMIT);
    //   })
    // ])
    //   .then((responses) => {
    //     console.log(`Promise.all([...]) -> ${responses[0]} in ${responses[1]}ms`);
    //   });
  }
}
