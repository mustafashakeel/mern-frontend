import React, { Component } from 'react';
import axios from 'axios';

// on the Form when the user update values update the state 
// and when the user hits submit go to the particular endpoint / api  which will create a ne wBook record / docment in Mongodb


class CreateBook extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isbn: '',
            author: '',
            description: '',
            publish_date: '',
            publisher: ''

        };
    }
    onChange = (e) => {
        console.log(" on change ", e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {

        console.log(" form data ", e.target);
        e.preventDefault();
        const payload = {
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author,
            description: this.state.description,
            publish_date: this.state.publish_date,
            publisher: this.state.publisher
        }

        axios.post('http://localhost:8080/api/books/', payload).then(res => {
            console.log(" added succeesss ", res);
            this.setState({
                title: '',
                isbn: '',
                author: '',
                description: '',
                published_date: '',
                publisher: ''

            })
        }).catch(e => console.log(" Error in creating a Record "));

    }
    render() {
        console.log(" state ", this.state);
        return (
            <div className="createBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            Create Book
                        </div>
                        <form onSubmit={this.onSubmit}>
                            {/*  1. Title 2. ISBN Author Description Publish Date Pubher name  */}
                            <div className="form-group">
                                <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Please enter title .." className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="isbn" value={this.state.isbn} onChange={this.onChange} placeholder="Please enter isbn .." className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="author" value={this.state.author} onChange={this.onChange} placeholder="Please enter author .." className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="description" value={this.state.description} onChange={this.onChange} placeholder="Please enter description .." className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="published_date" onChange={this.onChange} placeholder="Please enter Published Date .."
                                    value={this.state.published_date}
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="publisher" value={this.state.publisher} onChange={this.onChange} placeholder="Please enter publisher .." className="form-control" />
                            </div>
                            <input type="submit" value="Add Book " className="btn btn-outline-warning mt-4" />


                        </form>
                    </div>
                </div>
            </div>
        )

    }

}
export default CreateBook;