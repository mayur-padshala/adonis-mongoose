'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider
const AdonisMongoose = require('mongoose')

class MongooseProvider extends ServiceProvider {

  * register () {
    this.app.singleton('Adonis/Addons/AdonisMongoose', function (app) {
        const Config = app.use('Adonis/Src/Config')
        const mongoHost = Config.get('mongo.host', '127.0.0.1')
        const mongoPort = Config.get('mongo.port', '27017')
        const mongoDb = Config.get('mongo.db', 'test')
        const mongoUser = Config.get('mongo.user', '')
        const mongoPass = Config.get('mongo.pass', '')

        const connectUri = `${mongoHost}:${mongoPort}/${mongoDb}`
        const connectionString = (mongoUser !== '' || mongoPass !== '') ? `${mongoUser}:${mongoPass}@${connectUri}` : connectUri

        AdonisMongoose.connect(connectionString)

        return AdonisMongoose
    })
  }



}

module.exports = MongooseProvider
