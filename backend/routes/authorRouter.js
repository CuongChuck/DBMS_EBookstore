import express from 'express';
import { mysqlConnection } from '../config.js';

const authorRouter = express.Router();

// Route for INSERT Author
authorRouter.post('/add', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: "Send all required fields: name"
            });
        }
        const sql = `INSERT INTO Author(Name) VALUES(?)`;
        const values = [request.body.name];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.err(err.message);
            return response.status(201).send({
                message: `Author ${values[0]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for SELECT all authors
authorRouter.get('/', async (request, response) => {
    try {
        const sql = `SELECT * FROM Author`;
        mysqlConnection.query(sql, (err, results, fields) => {
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

// Route for SELECT a author based on id
authorRouter.get('/:id', async (request, response) => {
    try {
        const sql = `SELECT * FROM Author WHERE AuthorID=?`;
        const { id } = request.params;
        mysqlConnection.query(sql, [id], (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(200).json(results);
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for Update a author based on ID
authorRouter.put('/edit/:id', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: "Send all required fields: name"
            });
        }
        const { id } = request.params;
        const sql = `UPDATE Author SET Name = ? WHERE AuthorID = ${id}`;
        const data = [request.body.name];
        mysqlConnection.query(sql, data, (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "Author not found"});
            return response.status(200).send({message: `Author ${id} is updated`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

// Route for Delete a author based on ID
authorRouter.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `DELETE FROM Author WHERE AuthorID = ?`;
        mysqlConnection.query(sql, [id], (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "Author not found"});
            return response.status(200).send({message: `Author ${id} is deleted`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

export default authorRouter;