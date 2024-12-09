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
        const sql = `CALL AddAuthor(?,?)`;
        const values = [request.body.name, request.body.description];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
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
        const sql = `CALL GetAllAuthors()`;
        mysqlConnection.query(sql, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(200).json({
                data: results[0]
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for SELECT an author
authorRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL GetAuthor(${id})`;
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

// Route for Update a author based on ID
authorRouter.put('/edit/:id', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: "Send all required fields: name"
            });
        }
        const { id } = request.params;
        const sql = `CALL UpdateAuthor(?,?,?)`;
        const data = [id, request.body.name, request.body.description];
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
        const sql = `CALL DeleteAuthor(?)`;
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