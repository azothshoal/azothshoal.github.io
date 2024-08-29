const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { cats } = require('./data.js');
console.log('Imported cats:', cats)  //Cool for cats

const app = express();

// Set up Handlebars
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, 'hbs'),
    partialsDir: path.join(__dirname, 'hbs')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'hbs'));

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'My little Website' });
});

app.get('/cats', (req, res) => {
    console.log('Rendering cats page');
    console.log('cats data', cats);
    res.render('content', { 
        layout: 'layout',
        pageTitle: 'Neighborhood Cats',
        items: cats,
        bannerColor: '#FFC324'
    });
});

app.get('/plants', (req, res) => {
    res.render('content', { 
        pageTitle: "'Life is bristling with thorns, and I know no other remedy than to cultivate one's garden.'",
        bannerColor: '#4CAF50' 
    });
});

app.get('/profile', (req,res) => {
    res.render('profile', {
        layout: 'layout',
        pageTitle: 'Profile'
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});