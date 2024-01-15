import {DB_Name} from '../constants.js';
import mongoose from 'mongoose';

 const connectDB = async() =>{
    try {
        console.log(process.env.MONGODBURI, DB_Name)
        const connections =await mongoose.connect(`${process.env.MONGODBURI}/${DB_Name}`)
        console.log("database connected",connections.connection)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB