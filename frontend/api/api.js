// fetch ou axios

import axios from "axios"

// const {NODE_ENV} = process.env
// const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api" DEU ERRADO

const URL = "https://spotifyfullstack-55jz.onrender.com/api"

// const URL = "http://localhost:3000/api"

const responseArtists = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data