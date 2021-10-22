import React, { Component } from 'react';
import '../App.css';

class RestaurantUpdate extends Component {
  constructor(){
      super()
      this.state={
        name:null,
        email:null,
        author:null,
        rating:null,

    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/Restaurant/'+this.props.match.params.id).then((response) => {
        response.json().then((result) => {

            this.setState({ 
                name:result.name,
                email:result.email,
                author:result.author,
                rating:result.rating
             })
        })
    }
    )

  }
  
  update(){
    fetch('http://localhost:3000/Restaurant/'+this.props.match.params.id, {
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state)
}).then((result)=>{
    result.json().then((response)=>{
       alert("Restaurent has been Updated")
    })
})
  }
    render() {
       
        return (
            <div>
                <h1>Restaurant Update:</h1>
           

            <div className="tl">
            <input onChange={(event)=>{this.setState({name:event.target.value})}}
            placeholder="Restaurant Name" value={this.state.name}/> <br/> <br/>
             <input onChange={(event)=>{this.setState({email:event.target.value})}}
            placeholder="Restaurant Email"value={this.state.email}/> <br/> <br/>
             <input onChange={(event)=>{this.setState({author:event.target.value})}}
            placeholder="Restaurant Author"value={this.state.author}/> <br/> <br/>
             <input onChange={(event)=>{this.setState({rating:event.target.value})}}
            placeholder="Restaurant Rating"value={this.state.rating}/> <br/> <br/>
          <button onClick={()=>{this.update()}}>Update Restaurant</button>
        </div>
        </div>
        );
    }
}

export default RestaurantUpdate;