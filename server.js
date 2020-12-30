require('dotenv').config();
const express = require('express');
const userTrl = require('./controllers/userAccount.ctrl');
const app = express();
const port = process.env.PORT || 4040 ;

app.get('/api/users', userTrl.getAllUsers);
app.get('/api/users', userTrl.getAllUsers);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});