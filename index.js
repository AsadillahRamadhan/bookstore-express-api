import express from 'express';

const app = express();
const port = 4000;

// API ROUTES

app.get('/', (req, res) => {
    console.log('tes');
}); 

// END API ROUTES

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});