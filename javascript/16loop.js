for
while
do while
for of
for in (objects)
///////////
// it help to iterate over the array as well as print the series //
for(variable,condition,operation){}

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["Delhi","Mumbai","Helsinki","London","Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
Mumbai
Helsinki
London
Amsterdam

var city = ["Delhi","Mumbai","Helsinki","London","Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(`<p>${city[i]}</p>`)
}


var city = ["Delhi","Mumbai",['Red','Yellow',"orange"],"London","Amsterdam"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

Delhi
Mumbai
Red
Yellow
orange
London
Amsterdam


//////while/////
var i = 0;
while(i<5){
    console.log(i)
    i++;
}
0
1
2
3
4

///// Do While/////
var i = 0;
do {
    console.log(i)
    i++;
}
while(i<5)
0
1
2
3
4

var city = ["Delhi","Mumbai","Helsinki","London","Amsterdam"]

for(mycity of city){
    console.log(mycity)
}
Delhi
Mumbai
Helsinki
London
Amsterdam

var city = ["Delhi","Mumbai",['Red','Yellow',"orange"],"London","Amsterdam"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(mycolor of mycity){
            console.log(mycolor)
        }
    }else{
        console.log(mycity)
    }
}
