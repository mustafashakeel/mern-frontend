import React, { Component } from 'react';
import axios from 'axios';
class ShowBookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        axios.get('localhost:8080/api/books').then((res) => {
            console.log(" res", res);
        }

        ).catch(err => console.log(" Error ", err));
    }

    render() {
        return (<h1>Component Show </h1>);
    }

}
export default ShowBookList;