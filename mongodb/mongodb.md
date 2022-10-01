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