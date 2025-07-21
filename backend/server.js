const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require("passport");
const session = require("cookie-session");
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
dotenv.config();
require("./config/passport");
connectDB();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('API Running'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
