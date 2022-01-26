import React, { Component } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
class ShowBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/books').then((res) => {

            console.log(" res", res.data);
            this.setState({ books: res.data });


        }

        ).catch(err => console.log(" Error ", err));
    }

    render() {

        const books = this.state.books;
        var bookList;

        if (!books) {
            console.log("No Books")
        } else {
            bookList = books.map((book, i) => <BookCard book={book} key={i} />);
        }
        return (
            <div>
                <div className="cntainer">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center display-4">Books List</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                bookList
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
export default ShowBookList;