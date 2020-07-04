import { Document } from '@blue/internal';

export class Obtaining extends Document {
  isInStock: boolean = false;
  
  constructor() {
    console.log(`Blue is in stock?: ${this.isInStock}`);
  }
}
