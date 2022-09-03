let calc = {
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(5,9)
14
calc.sub(9,4)
5

////////////
function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi'

let English = new language('English','England')
undefined
English
language {name: 'English', country: 'England', greet: ƒ}