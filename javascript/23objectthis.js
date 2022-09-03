// let firstName = "Michal";
// let lastName = "Peter";

// let SayHi = {
//     firstName:'Zoe',
//     lastName:'Lisa',
//     greet:function(){
//         return `Say Hi to ${firstName} ${lastName}`;
//     }
// }

// console.log(SayHi.greet())
//Say Hi to Michal Peter

let firstName = "Michal";
let lastName = "Peter";

let SayHi = {
    firstName:'Zoe',
    lastName:'Lisa',
    greet:function(){
        return `Say Hi to ${this.firstName} ${this.lastName}`;
    }
}

console.log(SayHi.greet())
// Say Hi to Zoe Lisa