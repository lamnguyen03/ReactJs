import React, { Component } from 'react'
import axios from 'axios';
class Crud extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          index:0,
          name:"",
          price:"",
          action:"ADD ITEM",//default ADD ITEM
          items:[]
          
      };
      this.changeName = this.changeName.bind(this);
      this.changePrice = this.changePrice.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
     
    }
    componentDidMount() {  
      axios.get(`https://61bc10c1d8542f0017824535.mockapi.io/CRUD`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
    }
    changeName = (e)=>{
        this.setState({
           name:e.target.value
        })
    }
    changePrice = (e)=>{
        this.setState({
          price:e.target.value
        })
    }
   
    addItem =()=>{
        if(this.state.name !== '' && this.state.price!==''){
          console.log(this.state.name);
          console.log(this.state.price);
          axios({
            method:'POST',
            url :`https://61bc10c1d8542f0017824535.mockapi.io/CRUD`,
            items: {
              name: this.state.name,
              price: this.state.price,
            }
    
          }).then(res => {
            this.componentDidMount();
            this.setState ({
              name:"",
              price:""
            })
          })
        }
    }
    
    Edit = (item,index)=>{
      this.setState({
        action:'UPDATE ITEM',
        name:item.name,
        price:item.price,
        index:index
      });
    }
    updateItem = ()=>{
      let data = this.state.items;
      data.map((item,index)=>{
                if(this.state.index===index){
                  item.name = this.state.name;
                  item.price = parseInt(this.state.price);
                }
      })
      //set update items
      this.setState({
         items:data,
         name:"",
         price:"",
         action:'ADD_ITEM'
      })
       
    }
   
    deleteItem=(name)=>this.setState({
      items:this.state.items.filter(item=>item.name!=name)
    })
    render(){
      return (
        <div className="container">
            <div className="row">
              <div className="col-md-4">
                  <h1>{this.state.action}</h1>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="" className="form-control" onChange={this.changeName} value={this.state.name}/>
                  </div>
                  <div className="form-group">
                      <label>Price</label>
                      <input type="text" name=""  className="form-control" onChange={this.changePrice} value={this.state.price}/>
                  </div>
                  <div className="form-group">      
                     <button type="button" className="btn btn-primary"  onClick={this.state.action=='ADD ITEM'?this.addItem:this.updateItem}>Add</button>
                  </div>
              </div>
               
              <div className="col-md-8">
                  <h1>List Products</h1>
                  <table className="table">
                     <thead>
                        <tr>
                             <th>STT</th>
                             <th>Name</th>
                             <th>Price</th>
                             <th>Edit</th>
                             <th>Remove</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                          this.state.items.map((item,index)=>(
                            <tr key={index}>
                                <td>{index +1 }</td>
                                <td>{item.name}</td>
                                <td>{item.price} VND</td>
                                <td><label className="badge badge-warning" onClick={()=>this.Edit(item,index)}>Edit</label></td>
                                <td><label className="badge badge-danger" onClick={()=>this.deleteItem(item.name)}>Remove</label></td>
                            </tr>
                          ))
                        }
                     </tbody>
                  </table>
              </div>
            </div>
        </div>
      );
    }
  }
export default Crud;  
