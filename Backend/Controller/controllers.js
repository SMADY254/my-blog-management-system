import sql from 'mssql'
import mssql from 'mssql'
import config from '../db/config.js';

//get all customers in the  customers table
export const getcustomers = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("customer_id", sql.Int, customer_id)
            .input("email", sql.VarChar, email)
            .input("password", sql.VarChar,password)
            .input("departure", sql.VarChar, departure)
            .input("destination", sql.VarChar, destination)
            .input("customersno", sql.VarChar, customersno)
            .query("select * from customers");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
    finally{
        sql.close();
    }
}

//Get a single customer
export const getSinglecustomer = async (req, res) => {
    const { id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input("customer_id", sql.Int, customer_id)
            .input("email", sql.VarChar, email)
            .input("password", sql.VarChar,password)
            .input("departure", sql.VarChar, departure)
            .input("destination", sql.VarChar, destination)
            .input("customersno", sql.VarChar, customersno)
            .query("select * from customers WHERE customer_id = @customer_id");
            if(result.recordset.length === 0){
                return res.status(404).json({message:"customer not found"});
            }else{
                res.status(200).json(result.recordset[0]);
            }
    } catch (error) {
        res.status(500).json({ error: error.message })
    } finally {
        sql.close();
    }
}
//post a new customer -----check
export const createcustomer = async (req, res) => {
    try {
        const { email,password,departure,destination,customersno } = req.body;
        let pool = await sql.connect(config.sql);
        let insertdata= await pool.request()
            .input("email",sql.VarChar,email)
            .input("password",sql.VarChar,password)
            .input("departure", sql.VarChar, departure)
            .input("destination", sql.VarChar, destination)
            .input("customersno", sql.VarChar, customersno)
            .query('INSERT INTO customers (email, password, departure, destination, customersno) VALUES (@email, @password, @departure, @destination, @customersno)');

        res.status(201).json({ message: 'data created successfully' })
    }
    catch (err) {
        res.status(500).json({ error: error.message });
    }
    finally {
        sql.close();
    }
}
//put data in the database  --check
export const updatecustomer = async (req, res) => {
    try {
        const { id} = req.params;
        const { email} = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input("customer_id", sql.Int, customer_id)
            .input("email", sql.VarChar, email)
            .query("UPDATE customers  SET email =@email WHERE customer_id =@customer_id");
        res.status(200).json({ message: 'data updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
    finally {
        sql.close();
    }
}
//deleting the data from sql
export const deletecustomer = async (req, res) => {
    try {
      const { id } = req.params;
      let pool = await sql.connect(config.sql);
      await pool
        .request()
        .query(`DELETE FROM customers WHERE id = ${id}`);
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      sql.close();
    }
  };
  

/*export const getApi = async (req, res) => {
    res.send('welcome to getapi');
}
export const postApi = async (req, res) => {
    res.send('welcome to out post api');
}
//update api
export const updateApi = async (req, res) => {
    res.send('This is an update api')
}
//delete api
export const deleteApi = async (req, res) => {
    res.send('This is delete api ')
}*/