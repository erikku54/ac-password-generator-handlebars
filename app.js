
const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars').engine;
const generatePassword = require('./public/javascripts/generate_password')

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//setting static file directory
app.use(express.static('public'));

//setting body-prasor
app.use(express.urlencoded({ extended: true}));

//routing
app.get('/', (req,res) => {
    res.render('index');
})

app.post('/', (req, res) => {

    const options = {
        length: req.body.length,
        lowercase: req.body.lowercase==='on'? true: false,
        uppercase: req.body.uppercase==='on'? true: false,
        numbers: req.body.numbers==='on'? true: false,
        symbols: req.body.symbols==='on'? true: false,
        excludeCharacters: req.body.excludeCharacters,
    }

    const password = generatePassword(options); 
    console.log('random password is', password);
    res.render('index', { password, options });
});


app.listen(port, () => {
    console.log(`your app is now listening on http://localhost:${port}`);
});