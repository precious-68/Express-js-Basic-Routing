import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("<h1>Hello 👋🏽</h1><p>My Name is Precious Ikegbo</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>I am learning Backend Engineering, and I am on the path of being the absolute best at the game. Watch out!</p>.");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: +2347061963041</><p>Email: ikegboprecious2000@gmail.com</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});