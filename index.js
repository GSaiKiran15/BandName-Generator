import express from "express"
import bandname from "bandname"

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()

let band;

function generateName(){
    band = bandname()
    return band
}

const day = new Date()
const year = day.getFullYear()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs", {
        "bandName": generateName(),
        "fullYear": year
    })
})

app.post("/submit", (req, res) => {
    res.render("index.ejs", {
        "bandName": generateName(),
        "fullYear": year,
        "path":__dirname
    })
})

app.listen(3000, () => {
    console.log("3000");
})
