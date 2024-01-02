const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "Hello from Products"});
});

app.listen(8002, () => {
    console.log('Products is Listening to Port 8002');
});