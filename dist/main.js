"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var two_1 = require("./two");
new two_1.Two();
var App = /** @class */ (function () {
    function App() {
        this.name = 'andre dantas';
        console.log('Its working!', this.name);
    }
    return App;
}());
new App();
