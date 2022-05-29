import React, { Component } from "react";
import axios from "axios";
class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      type:"",
      img: "",
      action: "ADD ITEM", //default ADD ITEM
      news: [],
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeImg = this.changeImg.bind(this);
    this.changeType = this.changeType.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://61bc10c1d8542f0017824535.mockapi.io/Midterm`)
      .then((res) => {
        const news = res.data;
        this.setState({ news });
      });
  }
  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  changeImg = (e) => {
    this.setState({
      img: e.target.value,
    });
  };
  changeType = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  addItem = () => {
    if (
      this.state.title !== "" &&
      this.state.img !== "" &&
      this.state.type !== ""
    ) {
      axios({
        method: "POST",
        url: `https://61bc10c1d8542f0017824535.mockapi.io/Midterm`,
        data: {
          title: this.state.title,
          img: this.state.img,
          type: this.state.type,
        },
      }).then((res) => {
        this.componentDidMount();
        this.setState({
          title: "",
          img: "",
          type: ""
        });
      });
    }
  };

  Edit = (news, index) => {
    this.setState({
      action: "UPDATE ITEM",
      title: news.title,
      img: news.img,
      type:news.type,
      index:index,
      id: news.id
    });
  };
  updateItem = () => {
    axios({
      method: "PUT",
      url: `https://61bc10c1d8542f0017824535.mockapi.io/Midterm/${this.state.id}`,
      data: {
        title: this.state.title,
        img: this.state.img,
        type: this.state.type,
      },
    }).then((res) => {
      this.componentDidMount();
    });
    this.setState({
      title: "",
      type: "",
      img: "",
      action: "ADD_ITEM",
    });
  };

  deleteItem = (item) => {
    axios
      .delete(`https://61bc10c1d8542f0017824535.mockapi.io/Midterm/${item}`)
      .then((res) => {
        this.componentDidMount();
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="form">
            <h1>{this.state.action}</h1>
            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeType}
                value={this.state.type}
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeTitle}
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <label>Ảnh</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeImg}
                value={this.state.img}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={
                  this.state.action == "ADD ITEM"
                    ? this.addItem
                    : this.updateItem
                }
              >
                Add
              </button>
            </div>
          </div>

          <div className="show">
            <h1>NEWS</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Type</th>
                  <th>Ảnh</th>
                  <th>Title</th>
                  <th>Edit</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.state.news.map((news, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{news.type}</td>
                    <td>{news.img}</td>
                    <td>{news.title}</td>
                    <td>
                      <label
                        className="badge badge-warning"
                        onClick={() => this.Edit(news, index)}
                      >
                        Edit
                      </label>
                    </td>
                    <td>
                      <label
                        className="badge badge-danger"
                        onClick={() => this.deleteItem(news.id)}
                      >
                        Remove
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Crud;
