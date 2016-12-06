# adonis-mongoose
AdonisJS Addon Provider for Mongoose ODM (mongodb package for nodejs)

## Installation

```bash
$ npm install adonis-mongoose --save
```
The command above will install the package mongoose too.

You need to create a `config/mongo.js` file with the contents:

```js
'use strict'

const Env = use('Env')

module.exports = {
  host: Env.get('MONGO_HOST', 'localhost'),
  port: Env.get('MONGO_PORT', '27017'),
  user: Env.get('MONGO_USER', ''),
  pass: Env.get('MONGO_PASS', ''),
  db: Env.get('MONGO_DATABASE', 'adonisjs')
}
```
*You are using a connection local without user and pass, leave it blank like on the example.*

Add the entry `adonis-mongoose/providers/MongooseProvider.js` to the providers array on `bootstrap/app.js` like this:

```js
const providers = [
  'adonis-framework/providers/ConfigProvider',
  'adonis-framework/providers/EnvProvider',
   //..OTHER DEFAULT PROVIDERS...//
  'adonis-middleware/providers/AppMiddlewareProvider',
  'adonis-auth/providers/AuthManagerProvider',
  'adonis-mongoose/providers/MongooseProvider' //add this line after install the package
]
```

Add the entry `Mongoose: 'Adonis/Addons/AdonisMongoose'` on the `aliases` object on `bootstrap/app.js` file like this:

```js
const aliases = {
  Command: 'Adonis/Src/Command',
  Config: 'Adonis/Src/Config',
   //..OTHER DEFAULT PROVIDERS...//
  View: 'Adonis/Src/View',
  Mongoose: 'Adonis/Addons/AdonisMongoose' //this line
}
```

## Usage

*Now you can use mongoose anywhere in the application like below*

**app/Model/Post.js**

```js
'use strict'

/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')

let postSchema = mongoose.Schema({
    author: ObjectId,
    title: String,
    published: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema)
```

**As you can see, it's very easy to use.**
The provider is just a wrapper of awesome mongoosejs library.
****

## How to use Mongoose stuff?
- Mongoose Official site/docs: mongoosejs.com
- Mongoose Repository: https://github.com/Automattic/mongoose

## Found any Bugs?
Before opening an Issue on this repository, check if it's not a bug on Mongoose package here: **https://github.com/Automattic/mongoose/issues**

## License
Adonis-Mongoose is released under the MIT License.

