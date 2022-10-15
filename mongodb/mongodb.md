RollNo | Hindi | English |
  1    |  80   |         |
  2    |       |  78     |
  3    |  87   |         |  

  [
      {
          "rollNo":1,
          "Hindi":80
      },
      {
          "rollNo":2,
          "English":78
      },
      {
          "rollNo":3,
          "Hindi":87
      }
  ]


// Setup mongodb local

#window
> Download mongodb (https://www.mongodb.com/try/download/community) & install
> In c drive make folder my the name of data  C:\data
> inside data make folder my the name of db  C:\data\db

#mac
> Download mongodb (https://www.mongodb.com/try/download/community) & install
> open terminal
> type 'mkdir data/db'

# Step to run mongodb
# Windows
> open first cmd
> go inside the bin folder C:\Program Files\mongod\server\6.0.1\bin
> mongod   (start mongodb server)   ** Do not close this cmd

> Open second cmd
> go inside the bin folder C:\Program Files\mongod\server\6.0.1\bin
> mongo (start console to test query)

# mac
> open first terminal
> mongod --db  data/db            (start mongodb server)   ** Do not close this cmd

> Open second terminal
> mongo

default port > 27017

SQl       Mongo
Database  Database
Table     Collections
Row       Document
Select    Find
Insert    insert
Delete    Remve
Update    update

# To See all the databases
> Show dbs

# To go inside db
> use dbname

# To See All the collections
> show collections

# To find the data (Get)
db.colname.find()

db.users.find().pretty()

# Step to create database
use juneintern

# To insert document
db.collections.insert()

db.users.insert({name:"Ankit",city:"Delhi"})

db.users.insert(
    [
        {name:"Nikita",city:"Paris"},
        {name:"Arun",city:"Delhi"}
    ])

db.users.insert({_id:1,name:"Ankit",city:"Delhi"})
db.users.insert({_id:2,name:"Bhumika",city:"Amsterdam"})


_id> ObjectId(unique value, cannot be duplicated)
12 bytes
5 bytes > RandomNumber
3 bytes > Series
4 bytes > TimeStamp


///find with condition
db.users.find({city:"Delhi"})
db.users.find({city:"Amsterdam"})

db.users.find({city:"Delhi","state":"abc"})

////////
https://cloud.mongodb.com/
> Create cluster
> Network access (0.0.0.0/0)
> Database access > Add new database user > (admin/admin123)
  BuiltIn-Role (Atlas Admin) > Add User

> Database > conncet > connect your application > 
mongodb+srv://<username>:<password>@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority

mongodb+srv://amit:amit123@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority

//local
 mongodb://localhost:27017


 db.restaurants.find({"mealTypes.mealtype_id":1}).pretty()

 db.restaurants.find({condition},{projection})

  db.restaurants.find({"mealTypes.mealtype_id":1},{restaurant_name:1,_id:0,mealTypes:1}).pretty()

    db.restaurants.find({},{restaurant_name:1,_id:0}).pretty()

  db.restaurants.find({$and:[{cost:{$gt:500,$lt:1000}}]},{restaurant_name:1,_id:0,cost:1}).pretty()

  db.menu.find({menu_id:{$in:[4,20,32]}}).pretty()

    db.menu.find({}).limit(5).skip(15).pretty()

 db.restaurants.find({},{restaurant_name:1,_id:0,cost:1}).pretty()

db.restaurants.find({},{restaurant_name:1,_id:0,cost:1}).sort({cost:1})

db.restaurants.find({},{restaurant_name:1,_id:0,cost:1}).sort({cost:-1})



/////remove
db.collection.remove({}) ///remove all records
db.collection.remove({id:1}) // remove specific records

//update

db.col('orders).updateOne(
  {condition},
  {updatevalue}
)

db.col('orders).updateOne(
  {orderId:1},
  {
    $set:{
      "status":"delivered"
    }
  }
)