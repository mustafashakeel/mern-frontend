import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class UpdateBookInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: '',
            isbn: '',
            published_date: '',
            publisher: ''

        };
    }
    componentDidMount() {

        console.log(" windows location ", window.location);
        console.log(" print  ", window.location.pathname);

        var url = window.location.pathname;
        var id = url.split('/edit-book/')[1];
        console.log(" id ", id);
        axios.get('http://localhost:8080/api/books/' + id).then((res) => {


            console.log(" res", res.data);
            this.setState({
                author: res.data.author,
                description: res.data.description,
                isbn: res.data.isbn,
                published_date: res.data.published_date,
                publisher: res.data.publisher,
                title: res.data.title

            })




        }).catch(err => console.log(" Error ", err));

    }
    onChange = e => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    onSubmit = e => {
        e.preventDefault();
        console.log(" Submitted ");
        var url = window.location.pathname;
        var id = url.split('/edit-book/')[1];

        const data = {
            author: this.state.author,
            description: this.state.description,
            isbn: this.state.isbn,
            published_date: this.state.published_date,
            publisher: this.state.publisher,
            title: this.state.title

        }
        axios.put('http://localhost:8080/api/books/' + id, data)
            .then(res => {
                console.log(" success ", res);
                window.location.href = "http://localhost:3000";

            }).catch(err => {
                console.log(" Error Update Book ", err);
            })

    }
    render() {
        console.log(" state ", this.state);
        return (
            <div className="UpdateBookInfo" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">

                            <h2> Edit the Book Info </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">

                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" placeholder="please update title" name="title" className="form-control" value={this.state.title} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <input type="text" placeholder="please update title" name="author" className="form-control" value={this.state.author} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" placeholder="please update title" name="description" className="form-control" value={this.state.description} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input type="text" placeholder="please update isbn" name="isbn" className="form-control" value={this.state.isbn} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="published_date">Published Date</label>
                                    <input type="text" placeholder="please update date" name="published_date" className="form-control" value={this.state.published_date} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="published_date">Published Date</label>
                                    <input type="text" placeholder="please update publisher" name="publisher" className="form-control" value={this.state.publisher} onChange={this.onChange} />
                                </div>
                                <button type="submit" className="btn btn-success"> Update Book</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default UpdateBookInfo;