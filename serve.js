const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/food', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'food.html'));
});
app.get('/sign', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sign.html'));
  });
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${8000}`);
});
function exploreFood() {
    window.location.href = '/food.html';
  }
  function chng() {
    window.location.href = '/sign.html';
  }
  function closebox(){
    window.location.href = '/';
  }
  function ok() {
    const confirmation =document.getElementById("confirmation");
        confirmation.style.display="none";
    window.location.href = '/food.html';
  }