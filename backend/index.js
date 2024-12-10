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

// Route for SELECT all books
app.get('/rating/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `SELECT GetAverageRating(${id}) AS AvgRating`;
        mysqlConnection.query(sql, [true], (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(200).json({
                data: results
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});