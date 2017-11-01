import {Two} from "./two"
new Two()

class App {
  name = 'andre dantas';
  constructor(a: string){
    console.log('Its working!', this.name, a)
  }
}

new App('aaaa');