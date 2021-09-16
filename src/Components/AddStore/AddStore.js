import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Input, Select, Textarea, InputField } from "../../globalStyles"
import styled from "styled-components";

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
            this.setState((currentState) => ({ ShowError: !currentState.ShowError }));
            return;
        }
        this.props.addStoreHandler(this.state);
        this.setState({ name: "", price: "", category: "", description: "" });
        this.props.handleClose(true);
        alert("Your store has successfully store");
    };



    render() {
        const Label = styled.label`
            display: block;
            font-size: 14px;
            color: #000;
        `;

        const ErrorMessage = styled.div`
            color: #f00;
            font-size: 12px;
        `
        const Button = styled.button`
               width: 100%;
               background-color: #007fde;
               border: 0px;
               color: #fff;
               font-size:16px;
               padding: 10px;
               &:hover{
                   background-color: #FE6C0B;  
               }
        `
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header >
                        <Modal.Title>Add New Store</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="ui form" onSubmit={this.add}>
                            <InputField >
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                />
                                {this.state.ShowError && <ErrorMessage>Please Enter Sore Name</ErrorMessage>}
                            </InputField>
                            <InputField>
                                <Label>Price</Label>
                                <Input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    value={this.state.price}
                                    onChange={(e) => this.setState({ price: e.target.value })}
                                />
                                {this.state.ShowError && <ErrorMessage>Please Enter price</ErrorMessage>}
                            </InputField>
                            <InputField>
                                <Label>Category</Label>

                                <Select value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })}>
                                    <option value="indianappetizers">Indian Appetizers</option>
                                    <option value="indianlunch">Indian Lunch</option>
                                    <option value="indianlunch">Indian Dinner</option>
                                    <option value="indianlunch">Indian Breakfast</option>
                                </Select>
                                {this.state.ShowError && <ErrorMessage>Please Selete Category</ErrorMessage>}
                            </InputField>
                            <InputField>
                                <Label>Description</Label>
                                <Textarea name="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={(e) => this.setState({ description: e.target.value })}></Textarea>
                                {this.state.ShowError && <ErrorMessage>Please Enter Description</ErrorMessage>}
                            </InputField>
                            <InputField> <Button >Add</Button></InputField>

                        </form>

                    </Modal.Body>
                </Modal>

            </>

        );
    }
}

export default AddStore;

