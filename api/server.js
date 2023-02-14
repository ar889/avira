const cookieSession = require("cookie-session");
const express = require("express");
const path = require('path')
const fs = require('fs')
const http = require('http')
const mongoose = require("mongoose");
const cors = require("cors");
require("./passport");
require("dotenv").config();
const passport = require("passport");
const authRoute = require("./routes/user");
const cartRoute = require("./routes/cartRoute");
const paymentRoute = require("./routes/paymentRoute");
const app = express();


const server=http.createServer(app)

// database connection
mongoose.connect(process.env.MONGODB_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((response)=>{console.log('database connected')})


app.use(express.json());
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
// Routes configuration
app.use("/auth", authRoute);
app.use("/stripe", paymentRoute);
app.use("/api", cartRoute);


app.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});



// const sslServer = https.createServer({
//   key:fs.readFileSync(path.join(__dirname,'cert','key.pem')),
//   cert:fs.readFileSync(path.join(__dirname,'cert','cert.pem'))
// },app)

server.listen(process.env.PORT,()=>console.log('Secure server is running on port 5000'))