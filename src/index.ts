import express from 'express';

const app = express();

app.get('/', () => {
})

app.listen(3001, () => {
    console.log('starting')
})