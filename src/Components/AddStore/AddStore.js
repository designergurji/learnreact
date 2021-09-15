import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class AddStore extends Component {

    state = {
        name: "",
        price: "",
        category: "",
        description: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.price === "" || this.state.category === "" || this.state.description === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.addStoreHandler(this.state);
        this.setState({ name: "", price: "", category: "", description: "" });
        this.props.handleClose(true)
    };
 
   

    render() {
        
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header >
                        <Modal.Title>Add New Store</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="ui form" onSubmit={this.add}>
                            <div className="field">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    value={this.state.price}
                                    onChange={(e) => this.setState({ price: e.target.value })}
                                />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Category"
                                    value={this.state.category}
                                    onChange={(e) => this.setState({ category: e.target.value })}
                                />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <textarea name="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={(e) => this.setState({ description: e.target.value })}></textarea>

                            </div>
                            <button className="dsdsd">Add</button>
                        </form>
                       
                    </Modal.Body>
                </Modal>

            </>

        );
    }
}

export default AddStore;

