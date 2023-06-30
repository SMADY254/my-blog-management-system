import mssql from 'mssql'
import sql from 'mssql'
import config from '../db/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/*export const loginRequired = (req,res,next)=>{
    if(req.customer){
        next();
    }else{
        return res.status(401).json({message:'unauthorized customer!'});
    }
}*/

//aunthenticate the user by registering
export const booknow = async (req, res) => {
    const { destination, departure, customersno } = req.body;
    
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request()
            .input('destination', sql.VarChar, destination)
            .input('departure', sql.VarChar, departure)
            .input('customersno', sql.VarChar, customersno)
            .query('SELECT * FROM arrivals WHERE destination = @destination, departure = @departure, customers = @customersno');
        const customer = result.recordset[0];
        console.log(customer)
        if (!customer) {
            res.status(409).json({ error: 'customer already exist' });
        } else {
            let result = await pool.request()
                .input('destination', sql.VarChar, destination)
                .input('departure', sql.VarChar, departure)
                .input('customersno', sql.VarChar, customersno)
                .query('INSERT INTO arrivals (destination, departure, customersno) VALUES (@destination, @departure, @customersno)');

            res.status(200).send({ message: 'arrivals created successful' });
        }
        console.log(result);
    }
    catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
    finally {
        sql.close();
    }
}
//login part
export const login = async (req, res) => {
    const { email, password ,} = req.body;
    let pool = await sql.connect(config.sql);
    const result = await pool.request()
        .input('email', sql.VarChar, email)
        .input('password',sql.VarChar, password)
        .query('SELECT * FROM customers WHERE email = @email, password = @password');

    const customer = result.recordset[0];
    if (!customer) {
        res.status(401).json({ error: 'authentication failed .wrong credentials' });
    } else {
        if (!bcrypt.compareSync(password, customer.password)) {
            res.status(401).json({ error: 'authentication failed .wrong credentials' });
        } else {
            const token = jwt.sign({ email: customer.email }, config.jwt_secret);
            res.status(200).json({ email: customer.email, token: token });
        }
    }
};