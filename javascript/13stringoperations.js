var uname="niKitA"
var uname="niKitA"
undefined
uname.toUpperCase()
'NIKITA'
uname.toLowerCase()
'nikita'

var city = "amsTerdam"

city.length
9
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(1)
'm'
city.charAt(-1)
''
city.at(0)
'a'
city.at(1)
'm'
city.at(-1)
'm'
city.at(-2)
'a'
city.charAt(-1)
''

var a = "John"
var b = "john"

a == b
false
a.toLowerCase() == b .toLowerCase()
true

var city = "amsTerdam"
undefined
city.slice(1)
'msTerdam'
city.slice(2)
'sTerdam'
city.slice(2,6)
'sTer'
city.slice(0,-1)
'amsTerda'
city.slice(0,-2)
'amsTerd'
city.slice(2,-2)
'sTerd'
city.slice(-2,2)
''
city.slice(-2,-1)
'a'
city.slice(-1,-2)
''


var city = "amsTerdam"
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = 'paRIs'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'


var uname = "  kanika  "
uname.length
10
uname.trim()
'kanika'

var uname = "  kanika .  "
uname.length
12
uname.trim()
'kanika .'

var a = "I am learning Javascript"
undefined
a.replace('Javascript','JS')
'I am learning JS'
var a = "JavaScript I am learning Javascript"
undefined
a.replace('Javascript','JS')
'JavaScript I am learning JS'
var a = "JavaScript I am learning JavaScript"
undefined
a.replace('JavaScript','JS')
'JS I am learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS I am learning JS'

var uname = "  kanika .  "
undefined
uname.replaceAll(' ','')
'kanika.'
uname.replace(/ /g,'')
'kanika.'

var a = "https://github.com/Aakashdeveloper/Edu_ang_july_2022"
undefined
a.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'Edu_ang_july_2022']
var out = a.split('/')
undefined
out[4]
'Edu_ang_july_2022'
a.split('/')[4]
'Edu_ang_july_2022'
var a = "https://github.com/Aakashdeveloper/Juluang"
undefined
a.split('/')[4]
'Juluang'

var a = "JavaScript"
undefined
a.split('')
(10) ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
var b = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
undefined
b.toString()
'J,a,v,a,S,c,r,i,p,t'
b.toString().replaceAll(',','')
'JavaScript'
