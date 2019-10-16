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
  Label
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      activeItem: this.props.activeItem ? this.props.activeItem : {}
    };
  }
  validateInput = inputItem =>{
    if(inputItem.name===''){
      this.setState({isError:true})
      return
    }
    this.props.onSave(inputItem)
  }

  handleChange = e => {
    let { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };
  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}> Add Client </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Product Name</Label>
              <Input
                invalid = {this.state.isError}
                type="text"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Product Area Name"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => this.validateInput(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
