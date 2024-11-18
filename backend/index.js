import express from "express";
import { PORT, mysqlConnection } from "./config.js";
import publisherRouter from "./routes/publisherRouter.js";
import cors from 'cors';

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