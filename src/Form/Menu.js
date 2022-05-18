import React, { Component } from 'react'
import './menu.css'
class Menu extends Component {
  constructor(props){
      super(props);
      this.state = {
          drink:0,
          price:0,
          money:0
      }
      this.HandlerChage = this.HandlerChage.bind(this);
      this.HandlerSubmit = this.HandlerSubmit.bind(this);
  }
  HandlerChage = (event) =>{
      let key = event.target.name;
      let val = event.target.value;
      if(key=="drink"){
        if(val=="Cà phê sữa"){
          this.setState({price: 12000})
        }
        else if (val =="Cà phê đá"){
          this.setState({price: 10000})
        }
        else if (val =="Sting dâu"){
          this.setState({price: 8000})
        }
        else if (val =="Trà đá"){
          this.setState({price: 2000})
        }
      }
      
      this.setState({[key]:val});
  }
  HandlerSubmit = (event) =>{
      event.preventDefault();
      this.CheckOrder();  
  }
  CheckOrder = () =>{
    if(this.state.money == 0 || this.state.money < this.state.price){
      alert("Bạn không đủ tiền để mua");
    }
    else if(this.state.drink ==""){
      alert("Chọn loại nước uống");
    }
    else alert("Bạn vừa mua "+ this.state.drink + " và số tiền thừa là "+ ((this.state.money)-(this.state.price)) )
  }
  render() {
      return (
        <form onSubmit={this.HandlerSubmit} name="" method="" className="form1">  
        <table width={700} className="tbl">
          <tbody><tr>
              <td colSpan={2} id="td">Menu</td>
            </tr>
            <tr>
              <td id="tui">Cà phê sữa...........................12.000đ</td>
            </tr>
            <tr>
              <td id="tui">Cà phê đá.............................10.000đ</td>
            </tr>
            <tr>
              <td id="tui">Sting dâu.............................8.000đ</td>
            </tr>
            <tr>
              <td id="tui">Trà đá.............................2.000đ</td>
            </tr>
          </tbody></table>
        <table width={700} className="tbl">
          <tbody><tr>
              <td colSpan={2} id="td">MỜI BẠN NHẬP</td>
            </tr>
            <tr>
              <td>Nhập số tiền và chọn thức uống</td>
              <td>
              <input onChange={this.HandlerChage} type="number" name="money" id="money" defaultValue="" />
              <select value={this.state.drink} onChange={this.HandlerChage} name="drink" id="cars" >
                  <option>Chọn thức uống</option>
                  <option value={"Cà phê sữa"}>Cà phê sữa</option>
                  <option value={"Cà phê đá"}>Cà phê đá</option>
                  <option value={"Sting dâu"}>Sting dâu</option>
                  <option value={"Trà đá"}>Trà đá</option>
              </select>
              </td>
            </tr>
            <tr>
              <td>Kết quả:</td>
              <td>
                <label>
                  <span>{this.state.drink}</span>
                </label>
              </td>
            </tr> 
            <tr>
              <td>Tiền thừa:</td>
              <td>
                <label>
                  <span >{((this.state.money)-(this.state.price))}</span>
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <label><input type="submit" name="Submit" defaultValue="Đặt món" /></label>
              </td>
            </tr>
          </tbody></table>
      </form>
      );
  }
}

export default Menu;