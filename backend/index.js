import express from "express";
import { PORT, mysqlConnection } from "./config.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import publisherRouter from "./routes/publisherRouter.js";
import authorRouter from "./routes/authorRouter.js";
import authRouter from "./routes/authRouter.js";
import translatorRouter from "./routes/translatorRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import bookRouter from "./routes/bookRouter.js";

const app = express();

// Parse JSON requests
app.use(express.json());
app.use(cookieParser());

// Handle CORS policy
// app.use(cors());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
});

mysqlConnection.connect((err) => {
    if (err) return console.err(err.message);
    console.log("Connected to MySQL server");
});

app.use('/publisher', publisherRouter);
app.use('/author', authorRouter);
app.use('/translator', translatorRouter);
app.use('/category', categoryRouter);
app.use('/book', bookRouter);
app.use('/', authRouter);