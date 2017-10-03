import { Injectable } from '@angular/core';

@Injectable()
export class TepmlateServiceService {

  constructor() { }

  myPlaces () {
    return ['hlevaha', 'petchersk', 'vishgorodskaya']
  }
  myState() {
    return 'There are my places to live'
  }

}
