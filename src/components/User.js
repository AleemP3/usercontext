import React from 'react';
import { Card, Image} from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";

const User = () => {


  return(
    <UserConsumer>
      {value => (
        <Card>
          <Image src='https://img.webme.com/pic/a/animedarkangel/naruto66.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{value.firstname} {value.lastname}</Card.Header>
            <Card.Description>Description: {value.description}</Card.Description>
            <br />
            <Card.Meta>Email: {value.email}</Card.Meta>
          </Card.Content>
          <Card.Content>Date Joined: {value.date}</Card.Content>
        </Card>
      )}
    </UserConsumer>
  )
}

export default User;