import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";

class UserForm extends React.Component {

state = { firstname: this.props.firstname, lastname: this.props.lastname,
   description: this.props.description, email: this.props.email }

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.updateUser(this.state)
}

  render() {
    const { firstname, lastname, description, email } = this.state; 
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
          name="firstname"
          placeholder="first name"
          type="text"
          value={firstname}
          onChange={this.handleChange}
          />
          <Form.Input 
          name="lastname"
          placeholder="last name"
          type="text"
          value={lastname}
          onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input 
          name="description"
          placeholder="description"
          type="text"
          value={description}
          onChange={this.handleChange}
          />
          <Form.Input 
          name="email"
          placeholder="email"
          type="text"
          value={email}
          onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button color="inverted blue">Submit</Form.Button>
      </Form>
    );
  };
};

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      {value => (
        <UserForm 
          {...props}
          firstname={value.firstname}
          lastname={value.lastname}
          description={value.description}
          email={value.email}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm; 