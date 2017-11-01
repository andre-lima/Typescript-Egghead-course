import {Two} from "./two"
new Two()

class App {
  name = 'andre dantas';
  constructor(){
    console.log('Its working!', this.name)
  }
}

new App();