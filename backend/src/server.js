const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@oministack9-95zvb.mongodb.net/oministack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, function() {
    console.log('Node server running on port http://localhost:3333/');
});
