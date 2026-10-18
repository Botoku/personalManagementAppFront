import mongoose from "mongoose";


global.mongoose = {
    conn: null,
    promise: null
}

export async function dbConnect(){
    try {
        if(global.mongoose && global.mongoose.conn){
        }
        else {
            const conString = process.env.NEXT_PUBLIC_MONGO_URL
            const promise = mongoose.connect(conString, {
                autoIndex: true
            })
            global.mongoose = {
                conn: await promise,
                promise
            }
            console.log("connected")
            return await promise
        }
    } catch (error) {
        console.log(error)
    }
    // try {
    //     await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL)
    //     console.log("connected to DB")
    // } catch (error) {
    //     console.log(error)
    // }

}