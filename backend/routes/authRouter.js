import express from 'express';
import { mysqlConnection } from '../config.js';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

const verifyAdmin = (request, response, next) => {
    const token = request.cookies.token;
    if (!token) return response.json({message: "Token needed"});
    else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error."});
            const role = decoded.role;
            if (role != 0) return response.json({message: "Authentication Error."});
            next();
        });
    }
}

const verifyUser = (request, response, next) => {
    const token = request.cookies.token;
    if (!token) return response.json({message: "Token needed"});
    else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return response.json({message: "Authentication Error."});
            const role = decoded.role;
            if (role != 1) return response.json({message: "Authentication Error."});
            next();
        });
    }
}

// Route for confirm log in
authRouter.get('/admin/auth', verifyAdmin, (request, response) => {
    return response.json({status: "Admin Authorized"});
});

// Route for confirm log in
authRouter.get('/user/auth', verifyUser, (request, response) => {
    return response.json({status: "User Authorized"});
});

// Route for confirm log in
authRouter.get('/role', (request, response) => {
    try {
        const token = request.cookies.token;
        if (!token) return response.json({message: "Token needed"});
        else {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if (err) return response.json({message: "Authentication Error."});
                const role = decoded.role;
                if (role == 0) return response.json({role: "Role Admin", id: decoded.id});
                else return response.json({role: "Role User", id: decoded.id});
            });
        }
    } catch (err) {
        response.status(500).send({message: err.message});
    }
});

// Route for logout
authRouter.get('/logout', (request, response) => {
    response.clearCookie('token');
    return response.json({message: "Logout Success"});
});

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
            if (err) return console.error(err.message);
            return response.status(201).send({
                message: `User ${values[1]} is inserted`
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for User list
authRouter.get('/user-list', async (request, response) => {
    try {
        const sql = `SELECT * FROM User`;
        mysqlConnection.query(sql, (err, results, fields) => {
            if (err) return response.status(404).send({message: err.message});
            return response.status(200).json({
                data: results
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for Log In
authRouter.post('/login', async (request, response) => {
    try {
        if (!request.body.username || !request.body.password) {
            return response.status(400).send({
                message: "Send all required fields: username, password"
            });
        }
        const sql = `SELECT * FROM User WHERE Username = ?`;
        mysqlConnection.query(sql, [request.body.username], (err, results, fields) => {
            if (err || results.length == 0 || request.body.password != results[0].Password)
                return response.status(404).json({status: "Failed"});
            else {
                const id = results[0].UserID;
                const role = results[0].Role.readUInt8(0);
                const token = jwt.sign({id, role}, "jwt-secret-key", {expiresIn: '1d'});
                response.cookie('token', token, {sameSite:'none'});
                return response.status(200).json({status: "Login Success", UserID: id});
            }
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).json({status: "Failed"});
    }
});

// Route for SELECT a User
authRouter.get('/user/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL GetUser(${id})`;
        mysqlConnection.query(sql, (err, results, fields) => {
            if (err) return response.status(404).send({message: err.message});
            return response.status(200).json({
                data: results[0],
                role: results[0][0].Role.readUInt8(0)
            });
        });
    } catch (err) {
        console.error(err.message);
        response.status(500).send({message: err.message});
    }
});

// Route for Delete a author based on ID
authRouter.delete('/user/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const sql = `CALL DeleteUser(?)`;
        mysqlConnection.query(sql, [id], (err, results, fields) => {
            if (err || results.affectedRows == 0) return response.status(404).json({message: "User not found"});
            response.clearCookie('token');
            return response.status(200).send({message: `User ${id} is deleted`});
        });
    } catch (err) {
        console.error(err);
        response.status(500).send({message: err.message}); 
    }
});

export default authRouter;