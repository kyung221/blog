
const express = require('express');
const app = express();
const sequelize = require('./models').sequelize;
sequelize.sync();
app.use(express.json());

const {
    Header,
    Board,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');


app.get('/', (req, res) => {
    res.send(`Response Complate`);
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

app.get('/header/data',(req, res) => {
    Header.findAll()
    .then(result => {res.send(result)})
    .catch(err => {throw err})
})

app.get('/new/data',(req, res) => {
    Board.findAll({
        Order: 'atime DESC',
        limit: 5
    })
    .then(result => {res.send(result)})
    .catch(err => {throw err})
})