import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowBookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }
    componentDidMount() {
        console.log(" print ID ", this.props.location)
        axios.get('http://localhost:8080/api/books').then((res) => {

            console.log(" res", res.data);
            this.setState({ books: res.data });


        }

        ).catch(err => console.log(" Error ", err));
    }

    render() {


        return (
            <div>
                <h2>Show book Details </h2>

            </div>

        );
    }

}
export default ShowBookDetails;