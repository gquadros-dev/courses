require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto');
    })
    .catch((e) => console.log(e));



const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));// trata o body
app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOptions = session({
    secret: 'alsçdakljdlkasjd',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 3600 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());


// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000.');
    });
});


