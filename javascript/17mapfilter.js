# Map
> Map is use to iterate over the Array
> It always return the same length of output array as input array
> it is use to apply the logics(add, sub, mul,div)

var a = [4,8,6,23,67,45,90,12,45,31,19,5]
a.map((data) => {return data*2})
[8, 16, 12, 46, 134, 90, 180, 24, 90, 62, 38, 10]

var a = [4,8,6,23]
a.map((abc) => {return `<p>${abc}</p>`})
['<p>4</p>', '<p>8</p>', '<p>6</p>', '<p>23</p>']

# Filter
> Filter is use to filter out the value;
> It may or my not return the same length of output array as input array
> Filter only return those data for which output or condition is true

var a = [4,8,6,23,67,45,90,12,45,31,19,5]
a.filter((data) => {return data>30})
[67, 45, 90, 45, 31]


var a = [-1,0,1,2]
a.map((data) => {return data*2})
[-2, 0, 2, 4]

a.filter((data) => {return data*2})
[-1, 1, 2]


/// Callback > when you call function inside another function
a.map(()=>{})