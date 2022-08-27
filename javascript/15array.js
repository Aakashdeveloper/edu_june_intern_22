Array is collection of homogenious as well as hetorgenious data type

let a = ["Hiii","Hello","Test",'code',`Hey`] >> Array of strings
let b = [4,45,23,37,45,89,3,3.11] >> Array of Number
let c = [true, true, false,true,false] >> Array of boolean

let d = ["Hiii",56,true,332,34,false,"hey","text"]

var a = [5,7,3,5,4]
typeof(a)

var a = [5,7,3,5,4]
typeof(a)
'object'
var city = ["Delhi","Mumbai","Helsinki","London","Amsterdam"]
undefined
city[0]
'Delhi'
city[1]
'Mumbai'
city.push('Boston')
6
city
(6) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']
city.push('Venice')
7
city
(7) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
var a = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
undefined
a.pop()
'Venice'
 ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']
a.pop(3)
'Boston'
a
(5) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']


var a = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

undefined
a.unshift('Dubai')
8
a
(8) ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
a.shift()
'Dubai'

push > add in the end of array
unshift > add as first value in array
pop > remove last value always
shift > remove first value always

var a = ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
a.slice(1)
(7) ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
a.slice(2)
(6) ['Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
a.slice(2,5)
(3) ['Mumbai', 'Helsinki', 'London']
a.slice(0,-2)
(6) ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']
a
(8) ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

var a = ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

a.splice(startIndex,DeleteCount, values)


var a = ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

// remove 2 values from index number 2
a.splice(2,2)
(2) ['Mumbai', 'Helsinki']
a
(6) ['Dubai', 'Delhi', 'London', 'Amsterdam', 'Boston', 'Venice']

// remove no value but add 2 values on index 3
a.splice(3,0,'Pune','Nice')
[]
a
(8) ['Dubai', 'Delhi', 'London', 'Pune', 'Nice', 'Amsterdam', 'Boston', 'Venice']
// remove 1 value on index 1 and add 2 values
a.splice(1,1,'Innsburg','Paris')
['Delhi']
a
(9) ['Dubai', 'Innsburg', 'Paris', 'London', 'Pune', 'Nice', 'Amsterdam', 'Boston', 'Venice']


var a = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

a.indexOf('London')
3
a.indexOf('Delhi')
0
a.indexOf('Pune')
-1
a.indexOf('Boston')
5

var c = ['a','b','c',1]

var b = [2,'d','e','f']
c+b
'a,b,c,12,d,e,f'
c.concat(b)
(8) ['a', 'b', 'c', 1, 2, 'd', 'e', 'f']
b.concat(c)
(8) [2, 'd', 'e', 'f', 'a', 'b', 'c', 1]


var name = "Bhavika";
var b = [1,2,3]
Array.isArray(name)
false
Array.isArray(b)
true

var city = ["Delhi","Mumbai","Helsinki","London","Amsterdam"]
var city = ["Delhi","Mumbai","Helsinki"['Red',[1,2,3],'Yellow',"orange"],"London","Amsterdam"]
city[0]
'Delhi'
city[3]
'London'
city[2]

var city = ["Delhi","Mumbai","Helsinki",['Red',[1,2,3],'Yellow',"orange"],"London","Amsterdam"]
city[2]
'Helsinki'
city[3]
(4) ['Red', Array(3), 'Yellow', 'orange']
city[3][0]
'Red'
city[3][2]
'Yellow'
city[3][1][0]
1
city[3][1][2]
3