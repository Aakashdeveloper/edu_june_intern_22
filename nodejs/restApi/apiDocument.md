// Page1

# List of City
> http://localhost:2500/location
https://noderestjune.herokuapp.com/location
# List of Restaurants
> http://localhost:2500/restaurants
# Restaurants wrt city
> http://localhost:2500/restaurants?stateId=3
# List of QuickSearch
> http://localhost:2500/meals

//Page2

# List of restaurants wrt Meal
> http://localhost:2500/restaurants?mealId=5
# Restaurants wrt cuisine & Meal
> http://localhost:2500/filter/4?cuisineId=2
# Restaurants wrt cost & Meal
http://localhost:2500/filter/1?lcost=200&hcost=700
# Sort on basis of cost
> http://localhost:2500/filter/1?lcost=200&hcost=700&sort=-1

//Page3

# Details of the restaurants
> http://localhost:2500/details/7
# Menu of the restaurant
> http://localhost:2500/menu/8


//Page 4

# Menu Details (POST)
> http://localhost:2500/placeOrder
{
	"orderId" : 2,
	"name" : "Ankit",
	"email" : "ankit@gmail.com",
	"address" : "Hom 35",
	"phone" : 8934645457,
	"cost" : 833,
	"menuItem" : [
		9,34,27
	]
}
# Place Order (POST)
> http://localhost:2500/menuItem
{
	"id":[7,34,12]
}

//Page 5

# List of orders
> http://localhost:2500/orders
# List of order wrt to email
> http://localhost:2500/orders?email=nidhi@gmail.com
# Update Payment Details (PUT)

> http://localhost:2500/updateOrder/2
{
	"status":"Pending",
	"bank_name":"PNB",
	"date":"15/10/2022"
}
# Delete Order (Delete)
> http://localhost:2500/deleteOrder/634a78374b7c5ccf7930f26e
