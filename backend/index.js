const app = require('./app')

app.listen(process.env.PORT || 3001,() => {
  console.log("App is running")
})