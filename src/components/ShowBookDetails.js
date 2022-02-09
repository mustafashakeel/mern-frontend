import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




class ShowBookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: []
        };
    }
    componentDidMount() {
        // const params = this.useParams();

        // console.log("params ", params);


        console.log(" windows location ", window.location);
        console.log(" print  ", window.location.pathname);
        var url = window.location.pathname;
        var id = url.split('/show-book/')[1];
        console.log(" id ", id);
        axios.get('http://localhost:8080/api/books/' + id).then((res) => {


            console.log(" res", res.data);
            this.setState({ book: res.data });



        }).catch(err => console.log(" Error ", err));
    }
    onDeleteClick(id) {


        console.log("Delete ", id);
        axios.delete('http://localhost:8080/api/books/' + id)
            .then(res => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error while Deleting ", err);

            });
        this.props.history.push('/');

    }


    render() {
        const book = this.state.book;
        console.log(" Book ", book);




        return (
            <div className="ShowBookDetails">
                <div className="container">
                    <div className="row">
                        <h2> Book Details </h2>

                    </div>
                    <div className="row">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Tile </th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">isbn</th>
                                    <th scope="col">Published Date </th>
                                    <th scope="col">Publisher </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{book.title}</th>
                                    <td>{book.author}</td>
                                    <td>{book.description}</td>
                                    <td>{book.isbn}</td>
                                    <td>{book.published_date}</td>
                                    <td>{book.publisher}</td>

                                </tr>

                            </tbody>
                        </table>



                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, book._id)}> Delete  This Book </button>


                        </div>

                        <div className="col-sm-6">
                            <Link to={`/edit-book/${book._id}`} className="btn btn-warning">
                                Edit this Book
                            </Link>



                        </div>

                    </div>

                </div>

            </div>

        );
    }

}
export default ShowBookDetails;