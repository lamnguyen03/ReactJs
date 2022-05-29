import React, { Component } from "react";
import axios from "axios";

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
  /*{listProduct
.filter((products) => products.status === "outstanding")
.map((product, index) => (
  <Outstanding
    key={index}
    image={product.image_post}
    title={product.title_post}
  />
))}*/
  render() {
    return (
      <div className="container">
        <h2>TÀI CHÍNH - KINH DOANH</h2>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            {this.state.news[this.state.news.length - 1] !== undefined ? (
              <div className="left">
                <img
                  src={this.state.news[this.state.news.length - 1].img}
                  alt="Lamp"
                ></img>{" "}
                <br></br>
                {this.state.news[this.state.news.length - 1].title}
              </div>
            ) : (
              console.log(2222)
            )}
          </div>
          <div className="col-md-6">
            {this.state.news
              .filter((news) => news.type === "TCKD")
              .map((news) => (
                <div className="row">
                  <div className="col-md-4">
                    <img src={news.img} alt="Lamp"></img>
                  </div>
                  <div className="col-md-8">{news.title}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}