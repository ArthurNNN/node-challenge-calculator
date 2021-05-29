const express = require("express");
const app = express();

app.get("/", function (req, res) {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    res.send("I'm a calculator!");
});

app.get("/add", function (req, res) {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    let a = parseInt(req.query.value1);
    let b = parseInt(req.query.value2);
    res.send(`ADD: ${a} + ${b} = ${a + b}`);

});

app.get("/substract", function (req, res) {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    let a = parseInt(req.query.value1);
    let b = parseInt(req.query.value2);
    res.send(`SUBSTRUCT: ${a} + ${b} = ${a - b}`);
});
app.get("/multiply", function (req, res) {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    let a = parseInt(req.query.value1);
    let b = parseInt(req.query.value2);
    res.send(`MULTIPLY: ${a} + ${b} = ${a * b}`);
});
app.get("/divide", function (req, res) {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    let a = parseFloat(req.query.value1);
    let b = parseFloat(req.query.value2);
    res.send(`DIVIDE: ${a} + ${b} = ${a / b}`);
});

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
};
app.use(myLogger);

app.listen(3000, () => console.log("Server is up and running"))