const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_DB, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useFindAndModify: false
        })

        console.log(`mongoDB is connected to: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

connectDB();

module.exports = connectDB;