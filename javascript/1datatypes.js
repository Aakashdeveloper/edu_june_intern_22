String ="Aaa" 'hii' "Test" '423' "3543grgr" `uggyg` 'true'
Number =  767 7657564 767.6756 .7876
Boolean = true false

//es5
var a = "Hii"
var b = 10
var c = true

typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'

var d = "20"
typeof(d)
'string'
var e = 10.45
typeof(e)
'number'
var f = $
typeof(f)
'function'
var f = #
VM292:1 Uncaught SyntaxError: Invalid or unexpected token
var f = @
VM300:1 Uncaught SyntaxError: Invalid or unexpected token
var f = '$10'
typeof(f)
'string'
var g = 'true'
typeof(g)
'string'
var h = `test`
typeof(h)
'string'

var a = 10
var b = 20
a+b (addition)
30
a-b
-10
a*b
200
a/b
0.5
b%a
0

5%2
1
5%3
2
5%4
1
5%5
0

2%4
2
3%4
3
1%4
1

var a = "Hiii"
var b = "JavaScript"
a+b (concat)
'HiiiJavaScript'
a-b
NaN (Not a Number)
a*b
NaN
a/b
NaN

a+b
'Hii10'
a-b
NaN

string+string = string
string+number = string
number+string = string
number+number = number

"10"+20+30
"1020"+30
'102030'

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30-1
102029

10+"20"+30-1
102029

10+20+"30"-1
3029


"10"+20
'1020'
"10"-20
-10
"10"*20
200
"10"/20
0.5

"10a"-1
NaN
"10"-1
9
10-"1"
9
10-"1a"
NaN
"20"*"5"
100
"20a"*"5"
NaN