const path = require('path');

const express = require('express');
const app = express();
const port = 3030;
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));