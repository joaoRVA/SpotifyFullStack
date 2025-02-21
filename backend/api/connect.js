import {MongoClient} from "mongodb"

const URI = "mongodb+srv://joaovitorDB:LRMJJpfEeHD5Ko1S@cluster0.jt61g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyDB")
// const songsCollection = await db.collection("songs").find({}).toArray()
// console.log(songsCollection)

