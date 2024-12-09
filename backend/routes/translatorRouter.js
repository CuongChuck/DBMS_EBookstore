import express from 'express';
import { mysqlConnection } from '../config.js';

const translatorRouter = express.Router();

// Route for INSERT Translator
translatorRouter.post('/add', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: "Send all required fields: name"
            });
        }
        const sql = `INSERT INTO Translator(Name, Description) VALUES(?,?)`;
        const values = [request.body.name, request.body.description];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `Translator ${values[0]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for INSERT Book Translator
translatorRouter.post('/add-book/:id', async (request, response) => {
    try {
        if (!request.body.bookid) {
            return response.status(400).send({
                message: "Send all required fields: bookid"
            });
        }
        const { id } = request.params;
        const sql = `CALL AddBookTranslator(?,?)`;
        const values = [id, request.body.bookid];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `Book ${values[1]} is added to Translator ${values[0]}`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for DELETE Book Author
translatorRouter.delete('/:translatorid/delete-book/:bookid', async (request, response) => {
    try {
        const { translatorid, bookid } = request.params;
        const sql = `CALL DeleteBookTranslator(?,?)`;
        const values = [translatorid, bookid];
        mysqlConnection.query(sql, values, (err, results, fields) => {
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `Book ${values[1]} is deleted from Translator ${values[0]}`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for SELECT all Translators
translatorRouter.get('/', async (request, response) => {
    try {
        const sql = `CALL GetAllTranslators()`;
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

// Route for SELECT a translator based on id
translatorRouter.get('/:id', async (request, response) => {
    try {
        const sql = `CALL GetTranslator(?)`;
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

// Route for Update a Translator based on ID
translatorRouter.put('/edit/:id', async (request, response) => {
    try {
        if (!request.body.name) {
            return response.status(400).send({
                message: "Send all required fields: name"
            });
        }
        const { id } = request.params;
        const sql = `CALL UpdateTranslator(?,?,?)`;
        const data = [id, request.body.name, request.body.description];
        mysqlConnection.query(sql, data, (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "Translator not found"});
            return response.status(200).send({message: `Translator ${id} is updated`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

// Route for Delete a Translator based on ID
translatorRouter.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `DELETE FROM Translator WHERE TranslatorID = ?`;
        mysqlConnection.query(sql, [id], (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "Translator not found"});
            return response.status(200).send({message: `Translator ${id} is deleted`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

export default translatorRouter;