import React, { Component } from 'react'
import axios from 'axios';
import "./new.css";

 class Top_content extends Component {
  constructor(props){
    super(props);
    this.state = {
       news: [] 
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {  
    axios.get(`https://61bc10c1d8542f0017824535.mockapi.io/Midterm`)
    .then(res => {
      const news = res.data;
      this.setState({news});
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <h2>THẾ GIỚI</h2>
        <br></br>
        <div className="row">
          <div className="col-md-6">{print(this.state.news, 0,"TG")}</div>
          <div className="col-md-6">{print(this.state.news, 2,"TG")}</div>
        </div>
      </div>
    );
  }
}


const print = (arr,status,type)=>{
  let main,list=[];
    arr
    .filter((news) => news.type === type)
    .map((news,index,array) => 
      {
        if (array.length - 1 === index) {
        main = (
          <div className="left">
            <img src={news.img} alt="Lamp"></img>
            <br></br>
           <h3> {news.title}</h3>
          </div>
        );
        } else {
           list[index]= (
             <div className="row" id="newleft">
               <div className="col-md-4">
                 <img style={{width:"100%"}} src={news.img} alt="Lamp"></img>
               </div>
               <div className="col-md-8"><h5>{news.title}</h5></div>
             </div>
           );
        }
      }
 
    );
    if(status === 0){
      return main
    }
    else {
      return list
    }
}
export {Top_content,print}

