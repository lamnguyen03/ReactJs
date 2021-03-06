import React, { Component } from "react";
import axios from "axios";
import './new.css'
import { print } from "./Top_content";
export default class Bot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://61bc10c1d8542f0017824535.mockapi.io/Midterm`)
      .then((res) => {
        const news = res.data;
        this.setState({ news });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <h2>TÀI CHÍNH - KINH DOANH</h2>
        <br></br>
        <div className="row">
          <div className="col-md-6">{print(this.state.news, 0, "TCKD")}</div>
          <div className="col-md-6">{print(this.state.news, 1, "TCKD")}</div>
        </div>
      </div>
    );
  }
}
