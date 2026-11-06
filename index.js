const express = require('express');
const mongoose = require('mongoose');
const app = express();

const recipeRoute = require('./routes/recipe.route');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/recipes", recipeRoute);

app.get('/', (req, res) => {
    res.send("Recipe API is running successfully!");
});

mongoose.connect("mongodb+srv://kowsalyadb:Kowsalyadevivijayakumar123@cluster0.tbj5qtf.mongodb.net/recipeDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("DB Connected Successfully!");
    
    
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });
