function human(name,city){
    this.name= name;
    this.city = city;
}

function robot(name,country){
    this.name= name;
    this.age = 10;
    this.country = country
}


var Anand = new human('Anand','Paris')
undefined
Anand
human {name: 'Anand', city: 'Paris'}
Anand.country
undefined
human.prototype = new robot('Anand','France')
robot {name: 'Anand', age: 10, country: 'France'}
var Anand = new human('Anand','Paris')
undefined
Anand
human {name: 'Anand', city: 'Paris'}
Anand.country
'France'