const express = require("express")
const morgan = require("morgan")

const { connection } = require("./db")
const routes = require("./routes")
const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", routes)

app.use((err, _, res, __) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})

const PORT = 3001

connection.on("error", console.error.bind("Connection error: ", console))

connection.once("open", () => {
  console.log("Conected successfully to DB")
  app.listen(PORT, () => console.log(`Server listening to Cluster`))
})
