const express=require('express');
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

  const port = process.env.PORT || 5000;
 /*app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, '/client/build','index.html'));
  });
*/

// for deployment
/*if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}*/

/*app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})  */
//app.get('/*', (req, res) => res.send('/client/build/index.html'));

  app.use("/api/auth",authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/posts", postRoute);
  app.use("/api/categories", categoryRoute);

  if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, '/client/build','index.html'));
  });
  }
  
app.listen(port, () => {
    console.log("Backend is running.");
  });