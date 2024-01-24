require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {mainErrroHandler} = require("./middleware");
const APIError = require("./apiError/ApiError");

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

app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
});
