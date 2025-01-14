PS C:\Users\user> mongosh
Current Mongosh Log ID: 678636f45f5ea2890e90defd
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9
Using MongoDB:          8.0.4
Using Mongosh:          2.2.9

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2025-01-14T15:44:09.024+05:45: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> help

  Shell Help:

    use                                        Set current database
    show                                       'show databases'/'show dbs': Print a list of all available databases.
                                               'show collections'/'show tables': Print a list of all collections for current database.
                                               'show profile': Prints system.profile information.
                                               'show users': Print a list of all users for current database.
                                               'show roles': Print a list of all roles for current database.
                                               'show log <type>': log for current connection, if type is not set uses 'global'
                                               'show logs': Print all logs.

    exit                                       Quit the MongoDB shell with exit/exit()/.exit
    quit                                       Quit the MongoDB shell with quit/quit()
    Mongo                                      Create a new connection and return the Mongo object. Usage: new Mongo(URI, options [optional])
    connect                                    Create a new connection and return the Database object. Usage: connect(URI, username [optional], password [optional])
    it                                         result of the last line evaluated; use to further iterate
    version                                    Shell version
    load                                       Loads and runs a JavaScript file into the current shell environment
    enableTelemetry                            Enables collection of anonymous usage data to improve the mongosh CLI
    disableTelemetry                           Disables collection of anonymous usage data to improve the mongosh CLI
    passwordPrompt                             Prompts the user for a password
    sleep                                      Sleep for the specified number of milliseconds
    print                                      Prints the contents of an object to the output
    printjson                                  Alias for print()
    convertShardKeyToHashed                    Returns the hashed value for the input using the same hashing function as a hashed index.
    cls                                        Clears the screen like console.clear()
    isInteractive                              Returns whether the shell will enter or has entered interactive mode

  For more information on usage: https://docs.mongodb.com/manual/reference/method
test> show dbs
admin   40.00 KiB
config  60.00 KiB
local   40.00 KiB
test> quit
PS C:\Users\user> mongosh
Current Mongosh Log ID: 678637d100d76d81b090defd
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9
Using MongoDB:          8.0.4
Using Mongosh:          2.2.9
mongosh 2.3.8 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-01-14T15:44:09.024+05:45: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> 1+5
6
test> use nisha
switched to db nisha
nisha> 6+8
14
nisha> db.nisha.insertOne({name:"saraj",age: 22 ,marks:99})
{
  acknowledged: true,
  insertedId: ObjectId('67863b1100d76d81b090defe')
}
nisha> db.nisha.find()
[
  {
    _id: ObjectId('67863b1100d76d81b090defe'),
    name: 'saraj',
    age: 22,
    marks: 99
  }
]
nisha> db.nisha.insertMany([{name:"saraj",marks:66,city:"fulbari"},{name:"susn",marks:88,city:"sindhuli"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67863c6d00d76d81b090deff'),
    '1': ObjectId('67863c6d00d76d81b090df00')
  }
}
nisha> db.nisha.find()
[
  {
    _id: ObjectId('67863b1100d76d81b090defe'),
    name: 'saraj',
    age: 22,
    marks: 99
  },
  {
    _id: ObjectId('67863c6d00d76d81b090deff'),
    name: 'saraj',
    marks: 66,
    city: 'fulbari'
  },
  {
    _id: ObjectId('67863c6d00d76d81b090df00'),
    name: 'susn',
    marks: 88,
    city: 'sindhuli'
  }
]
nisha> db.nisha.find({city:"sindhuli"})
[
  {
    _id: ObjectId('67863c6d00d76d81b090df00'),
    name: 'susn',
    marks: 88,
    city: 'sindhuli'
  }
]
nisha> db.nisha.find({marks:{$gt:60}})
[
  {
    _id: ObjectId('67863b1100d76d81b090defe'),
    name: 'saraj',
    age: 22,
    marks: 99
  },
  {
    _id: ObjectId('67863c6d00d76d81b090deff'),
    name: 'saraj',
    marks: 66,
    city: 'fulbari'
  },
  {
    _id: ObjectId('67863c6d00d76d81b090df00'),
    name: 'susn',
    marks: 88,
    city: 'sindhuli'
  }
]
nisha> db.nisha.updateOne({name:"nishan"},{$set: {marks:88}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
nisha> db.nisha.updateOne({nmae:{"saraj"},{$set:{marks:77}})
Uncaught:
SyntaxError: Unexpected token (1:33)

> 1 | db.nisha.updateOne({nmae:{"saraj"},{$set:{marks:77}})
    |                                  ^
  2 |

nisha> db.nisha,updateOne({name:"saraj"},{$set:{marks:77}})
ReferenceError: updateOne is not defined
nisha> db.nisha.updateOne({name:"saraj"},{$set:{marks:77}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
nisha> db.nisha.find()
[
  {
    _id: ObjectId('67863b1100d76d81b090defe'),
    name: 'saraj',
    age: 22,
    marks: 77
  },
  {
    _id: ObjectId('67863c6d00d76d81b090deff'),
    name: 'saraj',
    marks: 66,
    city: 'fulbari'
  },
  {
    _id: ObjectId('67863c6d00d76d81b090df00'),
    name: 'susn',
    marks: 88,
    city: 'sindhuli'
  }
]
nisha>














