// DEPENDENCIES
const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
const sequelize = new Sequelize(process.env.PG_URI);

(async () => {
    try {
        await sequelize.authenticate();
        console.log(`Connected with Your Mom at ${process.env.PG_URI}`);
    } catch (err) {
        console.log(`Unable to connect to PG: ${err}`);
    }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
