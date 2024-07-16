const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase, sql } = require('./models/model.js');
const app = express();
const port = 3000;
const userRoutes = require('./Routes/userRoutes.js');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',userRoutes);

/*app.post('/signup', async (req, res) => {
    const {name,password} = req.body;
    console.log('Received data:');
    await connectToDatabase();
    const result = await sql.query`INSERT INTO customer VALUES (${name}, ${password})`;
})


app.get('/submit', async (req, res) => {
    // const { name, email, age } = req.body;

    try {
        // Connect to SQL Server
        await connectToDatabase();
       const result = await sql.query`SELECT * FROM CUSTOMER`;
       console.log(result);
        // Insert data into the database
        // const result = await sql.query`INSERT INTO FormData (Name, Email, Age) VALUES (${name}, ${email}, ${age})`;

        res.send('Form submitted successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error submitting form');
    } finally {
        sql.close();
    }
});
*/
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});