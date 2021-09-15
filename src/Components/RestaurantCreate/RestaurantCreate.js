import React, { Component } from "react";

class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      price: null,
      category: null,
      dec: null
    };
  }

  create() {
    fetch('http://localhost:3006/store', {
      method: "Post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((resp) => {
        
      })
    });
   
  };

  render() {
    return (
      <div>
        <h1>RestaurantCreate</h1>
        <div>
          <div>
            <input
              placeholder="Name"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
          </div>
          <div>
            <input
              placeholder="price"
              onChange={(event) => {
                this.setState({ price: event.target.value });
              }}
            />
          </div>
          <div>
            <input
              placeholder="category"
              onChange={(event) => {
                this.setState({ category: event.target.value });
              }}
            />
          </div>
         
          <div>
            <textarea placeholder="Email"
              onChange={(event) => {
                this.setState({ dec: event.target.value });
              }}>
              
            </textarea>
          
          </div>

          <div>
            <button onClick={() => {this.create();}}>
              Add Updates
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default RestaurantCreate;
