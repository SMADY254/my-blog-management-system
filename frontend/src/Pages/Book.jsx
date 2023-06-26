import React from 'react';
import "./book.css"



const BookPage = () => {
  return (
    <div className="bookpage">
      <h1>BOOK NOW</h1>
      <form className="styles.form">
            <label>Where to</label>
            <input type="text" placeholder="enter where to" />
            
            <label>Where from</label>
            <input type="text" placeholder="enter where from" />
            
            <label>How many</label>
            <input type="number" placeholder="Number of passengers" />
            
            <label>Arrival date</label>
            <input type="date" placeholder='enter arrival date' />
            
             <button type="submit" >Submit</button>
        </form>
     </div> 
  )
};

export default BookPage;