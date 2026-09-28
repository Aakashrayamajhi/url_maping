const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const TARGET_URL = 'https://professinal-portfolio.vercel.app/';

app.get('/', (req, res) => {
  res.redirect(301, TARGET_URL);
});

app.use((req, res) => {
  res.redirect(301, TARGET_URL);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Redirecting all requests to ${TARGET_URL}`);
});
