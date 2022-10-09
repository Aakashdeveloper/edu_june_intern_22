// Page1

# List of City
> http://localhost:2500/location
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
# Place Order (POST)

//Page 5

# List of orders
# List of order wrt to email
# Update Payment Details (PUT)
# Delete Order (Delete)
