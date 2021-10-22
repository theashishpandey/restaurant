import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "../App.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
class RestauranstList extends Component {
    constructor() {
        super()
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getdata()
    }
getdata(){
    fetch("http://localhost:3000/Restaurant").then((response) => {
            response.json().then((result) => {

                this.setState({ list: result })
            })
        })
}

    delete(id) {
        fetch("http://localhost:3000/Restaurant/"+id,
        {
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((response)=>{
           alert("Restaurent has been Deleted")
           this.getdata()
        })
    })
        

    }

   
    render() {
        return (
            <div>
                <h1 className='rl-h'>Restaurants List :</h1>
                <br />
                {
                    this.state.list ?
                        <div>
                            <Table className="tl" striped bordered hover variant="">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Manager</th>
                                        <th>Rating</th>
                                        <th>Operation</th>
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
                                            <td>{<Link to={'/Update/' + item.id}><FontAwesomeIcon icon={faEdit} /></Link>}
                                                <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                            </td>

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