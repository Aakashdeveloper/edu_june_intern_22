if(condition){

}else{

}
///////////
let a = 10;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

////////////
let uname = "John"
if(uname == "John"){
    console.log(`Hi ${uname} you are admin`)
} else if(uname=="Bhumika"){
    console.log(`Hi ${uname} you are super admin`)
}else{
    console.log(`Hi ${uname} you are unknown`)
}

let uname = "John"
if(role == "Admin"){
    if(uname == "John"){
        console.log(`Hi ${uname} you are admin`)
    }else{
        console.log(`Hi ${uname} you are unknown`)
    }
} else{
    if(uname == "Bhumika"){
        console.log(`Hi ${uname} you are super admin`)
    }else{
        console.log(`Hi ${uname} you are unknown`)
    }
}

////////////////
// ternary operator (single line if else)
condition ? if condition is true : if condition is false

var a = 10
a > 10 ? "Hii":"Biee"
'Biee'

var a = 10
a == 10 ? "Hii":"Biee"
'Hii'


var a = 10
a>10? a+1:a-1
9

var a = 10
a==10? a+1:a-1
11