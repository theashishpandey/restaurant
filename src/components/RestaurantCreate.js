import React, { Component } from 'react';
import '../App.css';


class RestaurantCreate extends Component {
    constructor(){
        super()
        this.state={
            name:null,
            email:null,
            author:null,
            rating:null,

        }
    }
    create(){
        fetch('http://localhost:3000/Restaurant',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((response)=>{
           alert("Restaurent has been added")
        })
    })
} 

    
    render() {
        return (
            <div>
               <h1 className='rl-h'> Restaurant Create: </h1>
               <div className="tl">
                   <input onChange={(event)=>{this.setState({name:event.target.value})}}
                   placeholder="Restaurant Name"/> <br/> <br/>
                    <input onChange={(event)=>{this.setState({email:event.target.value})}}
                   placeholder="Restaurant Email"/> <br/> <br/>
                    <input onChange={(event)=>{this.setState({author:event.target.value})}}
                   placeholder="Restaurant Author"/> <br/> <br/>
                    <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                   placeholder="Restaurant Rating"/> <br/> <br/>
                 <button onClick={()=>{this.create()}}>Add Restaurant</button>
               </div>
               
            </div>
        );
    }
}

export default RestaurantCreate;