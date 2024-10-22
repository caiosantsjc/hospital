const express = require('express');
const app = express();
const port = 2105;


app.get("/", (request, response) => {
    response.send('Hello World');
})

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
})