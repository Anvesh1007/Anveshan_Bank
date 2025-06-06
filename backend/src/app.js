const express = require('express')
const app = express()
const port = 3000
const ApiError=require('./Utils/ApiError')
const NotFoundError=require('./Middlewares/404ErrorHandler')
app.use(express.json({}))
app.use("/api/v1",require("./Router"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use((req,res,next)=>{
  next(new ApiError(404,"Not Found"))
})
app.use(NotFoundError)
module.exports = app