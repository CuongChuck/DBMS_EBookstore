import express from 'express';
import { mysqlConnection } from '../config.js';

const bookRouter = express.Router();

// Route for INSERT book
bookRouter.post('/add/:id', async (request, response) => {
    try {
        if (
            !request.body.name || !request.body.oriPrice || !request.body.quantityStored ||
            !request.body.publisher || !request.body.category
        ) {
            return response.status(400).send({
                message: "Send all required fields: name, original price, quantityStored, publisherID, categoryID"
            });
        }
        const { id } = request.params;
        const sql = `CALL AddBook(${id},?,?,?,?,?,?,?,?,?)`;
        const values = [
            request.body.name, request.body.oriPrice, request.body.quantityStored, request.body.publisher,
            request.body.date, request.body.quantitySold, request.body.description, request.body.sellPrice,
            request.body.category
        ];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `book ${values[0]} is inserted with author ${id}`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for INSERT book
bookRouter.post('/:bookid/add/:userid', async (request, response) => {
    try {
        if (
            !request.body.rating
        ) {
            return response.status(400).send({
                message: "Send all required fields: rating"
            });
        }
        const { bookid, userid } = request.params;
        const sql = `INSERT INTO Review(BookID, UserID, Rating) VALUES(?,?,?)`
        const values = [
            bookid, userid, request.body.rating
        ];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `Review for book ${values[0]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for SELECT all books
bookRouter.get('/', async (request, response) => {
    try {
        const sql = `CALL GetAllBooks()`;
        mysqlConnection.query(sql, [true], (err, results, fields) => {
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

// Route for SELECT a book
bookRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL GetBook(${id})`;
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

// Route for INSERT book
bookRouter.put('/edit/:id', async (request, response) => {
    try {
        if (
            !request.body.name || !request.body.oriPrice ||
            !request.body.quantityStored || !request.body.publisher
        ) {
            return response.status(400).send({
                message: "Send all required fields: name, original price, quantityStored, publisherID"
            });
        }
        const { id } = request.params;
        const sql = `CALL UpdateBook(?,?,?,?,?,?,?,?,?)`;
        const values = [
            id,
            request.body.name, request.body.oriPrice, request.body.quantityStored, request.body.publisher,
            request.body.date, request.body.quantitySold, request.body.description, request.body.sellPrice
        ];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `Book ${values[0]} is updated`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for Delete a book based on ID
bookRouter.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL DeleteBook(?)`;
        mysqlConnection.query(sql, [id], (err, results, fields) => {
            if (err) return response.status(404).json({message: "Book not found"});
            return response.status(200).send({message: `Book ${id} is deleted`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

export default bookRouter;