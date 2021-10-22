import React, { Component } from 'react';
import "../App.css"
class RestaurantSearch extends Component {
   constructor(){
       super()
       this.state={
           searchdata:null,
           nodata:false
       }
   }
   search(key){
       fetch('http://localhost:3000/Restaurant?q='+key).then((data)=>{
           data.json().then((resp)=>{
               console.warn("resp",resp)
             if(resp.length>0)
             {
                 this.setState({searchdata:resp,nodata:false})
             }
    else{
        this.setState({nodata:true, searchdata:resp})
    }
             
           })
       })
   }
   
   
    render() {
        return (
            <div className="sc" >
                 <h1>
                RestaurantSearch
            </h1>
      <input type="text" onChange={(event)=>this.search(event.target.value) }placeholder="Search any Restaurants" />
   <div>
      
            {
                this.state.searchdata?
                <div>
               {
                this.state.searchdata.map((item)=>
                <div>{item.name}</div>)
               }
                </div>
                :""
               }
               {
                   this.state.nodata?<h3>No data found</h3>:null
               }
               </div>
            

            </div>
        )}
    
}

export default RestaurantSearch;