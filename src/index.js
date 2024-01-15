import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';
const app = express();

dotenv.config({
    path:'./env'
})


connectDB();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODBURI}/${DB_Name}`)
//         console.log('MongoDB Connected...')


//         app.on("error",(error)=>{
//             console.log("error", error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is wotking on ${process.env.PORT} port`)
//         })
//     } catch (error) {
//         console.log("error", error)
//         throw error
//     }
// })()

