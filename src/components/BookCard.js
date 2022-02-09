import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const BookCard = (props) => {



    console.log(" book details ", props);
    return (
        <div className="card-container">
            <div className="desc">
                <h2><Link to={`/show-book/${props.book._id}`} key={props.book._id}>{props.book.title}</Link></h2>
                <h3>{props.book.author}</h3>
                <p>{props.book.description}</p>
            </div>
        </div>
    )


}
export default BookCard;