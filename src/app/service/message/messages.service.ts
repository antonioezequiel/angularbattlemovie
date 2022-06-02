import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  message: string = ''

  add(msg: string) {
    this.message = msg;

    setTimeout(() => {
      this.clear();
    }, 5000);
  }

  clear() {
    this.message = '';
  }
}
