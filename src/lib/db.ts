import { connect } from "mongoose"

const mongo_url = process.env.MONGOOG_URL

if (!mongo_url) {
    console.log("mongodb url not found")
}

let cache = global.mongoose

if (!cache) {
    cache = global.mongoose = { conn: null, promise: null }
}


const connectDb = async () => {
    if (cache.conn) {
        return cache.conn
    }

    if (!cache.promise) {
        cache.promise = connect(mongo_url!).then((c) => c.connection)
    }

    try {
        cache.conn = await cache.promise


    } catch (error) {
        console.log(error)
    }

    return cache.conn

}

export default connectDb

