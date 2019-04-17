"use strict";
exports.__esModule = true;
var Candidate = /** @class */ (function () {
    function Candidate(Name) {
        this.name = Name;
    }
    ;
    Candidate.prototype.helloWorld = function () {
        console.log('Hello World! My name is ' + this.name + ' and I promise I will master Javascript and Typescript in 2019');
    };
    ;
    return Candidate;
}());
;
var print = new Candidate('Dusan');
print.helloWorld();
