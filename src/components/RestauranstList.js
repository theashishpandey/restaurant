import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import "../App.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    fetch("https://api.jikan.moe/v4/anime").then((response) => {
            response.json().then((result) => {
                console.log(result,"Ashish");

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
                <h1 className='rl-h'>Movies List :</h1>
                <br />
                {
                    this.state.list ?
                        <div>


<Row xs={2} sm={4} className="g-4">

{this.state.list.data.map((item) =>

<Col>
<Card>
  <Card.Img variant="top" src={item.images.jpg.image_url} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Title>Episodes:{item.episodes}</Card.Title>

    <Card.Text>
     {item.synopsis}
    </Card.Text>
    <Button href={item.trailer.url} target="_blank">Watch Trailer</Button>
  </Card.Body>
</Card>
</Col>
)
}
     
    </Row>

                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default RestauranstList;