import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Table
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render() {
    const { toggle, onSave, clientList, productList } = this.props;

    let cList = clientList.length > 0
    && clientList.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.name}</option>
		)}, this);

    let pList = productList.length > 0
    && productList.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.name}</option>
		)}, this);
    return (

      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Feature Request </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Feature Title"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Feature description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="client">Client</Label>
              <Input
                type="select"
                name="client"
                value={this.state.activeItem.client}
                onChange={this.handleChange}
                placeholder="Select a Client"
              >
              {cList}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="client_priority">Client Priority</Label>
              <Input
                type="text"
                name="client_priority"
                value={this.state.activeItem.client_priority}
                onChange={this.handleChange}
                placeholder="Set Priority"
              />
            </FormGroup>
            <FormGroup>
              <Label for="target_date">Target Date</Label>
              <Input
                type="date"
                name="target_date"
                value={this.state.activeItem.target_date}
                onChange={this.handleChange}
                placeholder="Enter Feature description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="product_area">Product Area</Label>
              <Input
                type="select"
                name="product_area"
                value={this.state.activeItem.product_area}
                onChange={this.handleChange}
                placeholder="Enter Feature description"
              >
              {pList}
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
