const express = require('express');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const cors = require('cors');
const config = require('./config/config');
const connectDB = require('./config/db');
// Create Express app
const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
    auth({
        authRequired: false,
        secret: config.auth0.clientSecret,
        baseURL: config.auth0.baseURL,
        clientID: config.auth0.clientId,
        issuerBaseURL: config.auth0.issuerBaseURL,
    })
);
connectDB();

// Login route
app.get('/login', (req, res) => {
    res.oidc.login({ returnTo: '/' });
});

// Logout route
app.get('/logout', (req, res) => {
    res.oidc.logout({ returnTo: '/' });
});

// Callback route (Auth0 will redirect here after authentication)
app.get('/callback', (req, res) => {
    res.oidc.callback(); // Process the callback from Auth0
});

// Homepage route (protected, user must be logged in)
app.get('/', (req, res) => {
    res.send(`Hello, ${req.oidc.user ? req.oidc.user.name : 'Guest'}`);
});


app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


const PORT = config.port;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});