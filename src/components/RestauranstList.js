import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
class RestauranstList extends Component {
    constructor() {
        super()
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/Restaurant").then((response) => {
            response.json().then((result) => {

                this.setState({ list: result })
            })
        }
        )
    }

    render() {
        return (
            <div>
                <h1 className='rl-h'>Restaurants List :</h1>
                <br/>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Manager</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.list.map((item) =>
                        
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.author}</td>
                                            <td>{item.rating}</td>
                                            
                                        </tr>
                                    )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default RestauranstList;