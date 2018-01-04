import { Injectable } from '@angular/core';

@Injectable()
export class TextService {

  constructor() {}

  getText() {
    return Promise.resolve('A promise resolved');
  }
}
