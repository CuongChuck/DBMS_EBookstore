import express from 'express';
import { mysqlConnection } from '../config.js';

const categoryRouter = express.Router();

// Route for INSERT Category
categoryRouter.post('/add', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: "Send all required fields: name"
            });
        }
        const sql = `INSERT INTO Category(Name, Description) VALUES(?,?)`;
        const values = [request.body.name, request.body.description];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `Category ${values[0]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for INSERT Book Translator
categoryRouter.post('/add-book/:id', async (request, response) => {
    try {
        if (!request.body.bookid) {
            return response.status(400).send({
                message: "Send all required fields: bookid"
            });
        }
        const { id } = request.params;
        const sql = `CALL AddBookCategory(?,?)`;
        const values = [id, request.body.bookid];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `Book ${values[1]} is added to Category ${values[0]}`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for SELECT all Categorys
categoryRouter.get('/', async (request, response) => {
    try {
        const sql = `SELECT * FROM Category`;
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

// Route for SELECT a category based on id
categoryRouter.get('/:id', async (request, response) => {
    try {
        const sql = `CALL GetCategory(?)`;
        const { id } = request.params;
        mysqlConnection.query(sql, [id], (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(200).json({data: results});
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for Update a Category based on ID
categoryRouter.put('/edit/:id', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: "Send all required fields: name"
            });
        }
        const { id } = request.params;
        const sql = `CALL UpdateCategory(?,?,?)`;
        const data = [id, request.body.name, request.body.description];
        mysqlConnection.query(sql, data, (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "Category not found"});
            return response.status(200).send({message: `Category ${id} is updated`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

// Route for Delete a Category based on ID
categoryRouter.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `DELETE FROM Category WHERE CategoryID = ?`;
        mysqlConnection.query(sql, [id], (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "Category not found"});
            return response.status(200).send({message: `Category ${id} is deleted`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

// Route for Delete a author based on ID
categoryRouter.delete('/:categoryid/delete-book/:bookid', async (request, response) => {
    try {
        const { categoryid, bookid } = request.params;
        const sql = `CALL DeleteBookCategory(?,?)`;
        mysqlConnection.query(sql, [categoryid, bookid], (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "Category or book not found"});
            return response.status(200).send({message: `Book ${bookid} is deleted from category ${categoryid}`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

export default categoryRouter;