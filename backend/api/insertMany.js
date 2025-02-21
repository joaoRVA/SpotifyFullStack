import {artistArray} from "../../frontend/src/assets/database/artists.js"
import {songsArray} from "../../frontend/src/assets/database/songs.js"
import { db } from "./connect.js"
const newArtistArray = artistArray.map((currentObj, index) =>{
    const newArtistObj = {...currentObj}
    delete newArtistObj.id

    return newArtistObj
})
const newSongsArray = songsArray.map((currentObj, index) =>{
    const newSongsObj = {...currentObj}
    delete newSongsObj.id

    return newSongsObj
})

// inserir dados

const responseSongs = await db.collection("songs").insertMany(newSongsArray)
const responseArtists = await db.collection("artists").insertMany(newArtistArray)

console.log(responseArtists)
console.log(responseSongs)