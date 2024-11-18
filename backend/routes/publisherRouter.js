import express from 'express';
import { mysqlConnection } from '../config.js';

const publisherRouter = express.Router();

// Route for INSERT Publisher
publisherRouter.post('/', async (request, response) => {
    try {
        if (!request.body.name || !request.body.location) {
            return response.status(400).send({
                message: "Send all required fields: name, location"
            });
        }
        const sql = `INSERT INTO Publisher(Name, Location) VALUES(?,?)`;
        const values = [request.body.name, request.body.location];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.err(err.message);
            console.log("PublisherID:" + results.PublisherID);
            return response.status(201).send({
                message: `Publisher ${values[0]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for SELECT all publishers
publisherRouter.get('/', async (request, response) => {
    try {
        const sql = `SELECT * FROM Publisher`;
        mysqlConnection.query(sql, (err, results, fields) => {
            if (err) return console.error(err.message);
            console.log(results);
            return response.status(200).json({
                count: results.length,
                data: results
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for SELECT a publisher based on name
publisherRouter.get('/:name', async (request, response) => {
    try {
        const sql = `SELECT * FROM Publisher WHERE Name=?`;
        const { name } = request.params;
        mysqlConnection.query(sql, [name], (err, results, fields) => {
            if (err) return console.error(err.message);
            console.log(results);
            return response.status(200).json(results);
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

export default publisherRouter;