const fs = require("fs");

const writeFs = fs.writeFile("message.txt", "Hello Darwing From Node.js", (error) => {
    if (error) throw error;
    console.log("File has been saved.");
})

fs.readFile("./message.txt", (err, data) => {
    if (err) throw err;
    console.log(data);
}); 