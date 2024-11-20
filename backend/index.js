import express from "express";
import { PORT, mysqlConnection } from "./config.js";
import cors from 'cors';
import publisherRouter from "./routes/publisherRouter.js";
import authorRouter from "./routes/authorRouter.js";
import authRouter from "./routes/authRouter.js";
import translatorRouter from "./routes/translatorRouter.js";
import categoryRouter from "./routes/categoryRouter.js";

const app = express();

// Parse JSON requests
app.use(express.json());

// Handle CORS policy
app.use(cors());
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"]
// }));

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send("Hello World!");
});

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
app.use('/', authRouter);