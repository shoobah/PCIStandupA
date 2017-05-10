import { Injectable } from '@angular/core';
import { DATA } from './mock-data';

@Injectable()
export class ExternaldataService {

  constructor() { }

  getData(): Any { return DATA; } // stub

}
