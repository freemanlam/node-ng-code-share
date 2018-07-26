import { Component, OnInit } from '@angular/core';

import { add, subtract } from '../../../shared/calculator';

@Component({
  selector: 'app-root',
  template: '<pre style="font-size: 200%">{{result | json}}</pre>'
})
export class AppComponent implements OnInit {
  result;

  ngOnInit() {
    this.result = {
      'add(1, 1)': add(1, 1),
      'subtract(10, 5)': subtract(10, 5)
    };
  }

}
