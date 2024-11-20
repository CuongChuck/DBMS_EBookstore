import express from 'express';
import { mysqlConnection } from '../config.js';

const authRouter = express.Router();

// Route for Register
authRouter.post('/register', async (request, response) => {
    try {
        if (!request.body.email || !request.body.username || !request.body.password) {
            return response.status(400).send({
                message: "Send all required fields: email, username, password"
            });
        }
        const sql = `INSERT INTO User(Email, Username, Password, Role) VALUES(?,?,?,?)`;
        const values = [request.body.email, request.body.username, request.body.password];
        if (request.body.password == "1") {
            values.push(0);
        }
        else values.push(1);
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.err(err.message);
            return response.status(201).send({
                message: `User ${values[1]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for Admin Log In
authRouter.get('/', async (request, response) => {
    try {
        const sql = `SELECT * FROM Publisher`;
        mysqlConnection.query(sql, (err, results, fields) => {
            if (err) return console.error(err.message);
            console.log(results);
            return response.status(200).json({
                data: results
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for User Log In
authRouter.get('/', async (request, response) => {
    try {
        const sql = `SELECT * FROM Publisher`;
        mysqlConnection.query(sql, (err, results, fields) => {
            if (err) return console.error(err.message);
            console.log(results);
            return response.status(200).json({
                data: results
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

export default authRouter;