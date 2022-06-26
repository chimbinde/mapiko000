
const uri = "mongodb+srv://mernproject:mernproject@cluster0.otjfagp.mongodb.net/test";
 const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: uri
}

/*
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

*/
export default config


/** ***
 mongodb+srv://mernproject:<mernproject>@cluster0.otjfagp.mongodb.net/test

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}


 */