const express = require('express');
const app = express();
const path = require("path");
const port = 8080;
const login = require('./mongo');

app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server listing on port ${port}`);
});

app.get("/" ,(req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", async (req, res) => {
    let {email , password} = req.body;
    let login1 = new login({
        email: email,
        password: password,
    });

    await login1.save();
    
    res.send("data saved successfully");
});

