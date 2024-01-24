require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const {executeQuery} = require('./helpers');

const app = express();

const port = process.env.PORT || 3000

// Include Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
   res.json({
      message: 'Server Is Running'
   });
});

app.get('/test-connection', async (req, res) => {
   const sql = "Select * FROM student";
   const [students, error] = await executeQuery(sql);

   res.json(students);
});

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
});
