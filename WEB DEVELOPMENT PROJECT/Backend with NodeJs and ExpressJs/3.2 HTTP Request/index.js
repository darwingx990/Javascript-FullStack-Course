import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello word from GET HTTP.")
});

app.get("/contact", (req, res) => {
    res.send(" <section>\
        <h1>¡Contact Me!</h1>\
        <p p > I am here to help you. Contact me and I will answer to you as soon as posible.</p>\
         <section>\
         <h2>Contact information</h2>\
         <p><strong>Email: </strong>darwingx990@gmail.com</a></p>\
          <p><strong>Phone:</strong> +57 300 963 4567</p>\
          <p><strong>Location:</strong> Meellin, Colombia</p>\
            </section > "
    )
})

app.get("/aboutme", (req, res) => {
    res.send("<h1>About Me</h1><p>Hello people, I am Darwing, a software developer with lots of experience</p>")
})

app.listen(port, () => {
    console.log("Server running on port ", port);
});

