const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());

app.post('/rsvp', (req,res) => {
    res.json('test ok2');
})
app.listen(4000)
