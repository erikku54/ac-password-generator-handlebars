
const express = require('express');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars').engine;

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//setting static file directory
app.use(express.static('public'));

//routing
app.get('/', (req,res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`your app is now listening on http://localhost:${port}`);
})