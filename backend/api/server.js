import express from "express"
import cors from "cors"
import { db } from "./connect.js";
import path from "path";
const app = express();
const port = 3000
const __dirname = path.resolve()

app.use(cors())

app.get("/api/", (request, response) => {
    response.send("Só vamos usar os endpoints: '/artists' e '/songs'!")
})
app.get("/api/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray())
})
app.get("/api/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

// deploy - quando acessar qualquer endpoint que nao seja os acima, executa isso aqui:
app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", async (request, response) => {
    response.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

app.listen(port, () =>{
    console.log("servidor rodando na porta " + port)
})