export {}

class Candidate {
    name: string;

    constructor(Name: string){
        this.name = Name;
    };

    helloWorld():string {
    
        //console.log( 'Hello World! My name is ' + this.name + ' and I promise I will master Javascript and Typescript in 2019');
        return 'Hello World! My name is ' + this.name + ' and I promise I will master Javascript and Typescript in 2019';
    };
};


let print = new Candidate('Dusan');
console.log(print.helloWorld());


