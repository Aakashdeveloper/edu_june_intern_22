true+true
2
true+false
1
false+false
0

true is equal to 1
false is equal to 0


10+true
11
1/false
Infinity

"Hii"+true
'Hiitrue'

"true"+"true"
'truetrue'

"true"-"true"
NaN


var a = "10"
var b = "20"

a+b
'1020'
parseInt(a)
10
parseInt(b)
20
parseInt(a)+parseInt(b)
30

var a = "10.34"
var b = "20.11"
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.45

var a = "10"
var b = "20"
parseFloat(a)+parseFloat(b)
30

var a = "10.34"
var b = "20.11"
parseInt(a)+parseInt(b)
30

var a = "hi"
parseInt(a)
NaN

//es6
var a = "10.34"
var b = "20.11"
Number(a)+Number(b)
30.45

var a = "10"
var b = "20"
undefined
Number(a)+Number(b)
30

var a = "123Delhi"
var b = "Delhi123"
var c = "123Delhi456"

parseInt(a)
123

parseInt(b)
NaN

parseInt(c)
123

Number(a)
NaN
Number(b)
NaN
Number(c)
NaN